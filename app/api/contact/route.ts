import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import {
  defaultContactRecipient,
  getContactRecipientOption,
  isContactRecipientValue,
} from "@/app/lib/contactRecipients";

const logContactMail = (
  message: string,
  details: Record<string, unknown>,
) => {
  console.info(
    `[contact-mail] ${message}`,
    JSON.stringify(details, null, 2),
  );
};

const logContactMailError = (
  message: string,
  error: unknown,
  details: Record<string, unknown>,
) => {
  const nodemailerError = error as SMTPTransport.SentMessageInfo & {
    code?: string;
    command?: string;
    response?: string;
    responseCode?: number;
  };

  console.error(
    `[contact-mail] ${message}`,
    JSON.stringify(
      {
        ...details,
        errorName: error instanceof Error ? error.name : "UnknownError",
        errorMessage: error instanceof Error ? error.message : String(error),
        errorCode: nodemailerError.code,
        errorCommand: nodemailerError.command,
        errorResponse: nodemailerError.response,
        errorResponseCode: nodemailerError.responseCode,
      },
      null,
      2,
    ),
  );
};

export const POST = async (request: Request) => {
  try {
    const {
      recipient = defaultContactRecipient,
      firstName = "",
      lastName = "",
      email = "",
      phoneNumber = "",
      company = "",
      subject = "",
      message = "",
    } = await request.json();

    const recipientValue = isContactRecipientValue(String(recipient))
      ? recipient
      : defaultContactRecipient;
    const recipientOption = getContactRecipientOption(recipientValue);
    const senderAddress =
      process.env.SUPPORT_EMAIL?.trim() ?? "support@united4digital.com";
    const emailPassword = process.env.EMAIL_PASSWORD?.trim() ?? "";
    const emailSubject = subject.trim()
      ? `[${recipientOption.label}] ${subject.trim()}`
      : `[${recipientOption.label}] Contact form message`;

    const customerName = `${firstName} ${lastName}`.trim();
    const mailContext = {
      recipient: recipientValue,
      recipientLabel: recipientOption.label,
      to: recipientOption.email,
      fromName: customerName,
      senderAddress,
      replyToAddress: email,
      subject: emailSubject,
      smtp: {
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        user: senderAddress,
        hasPassword: Boolean(emailPassword),
      },
      nodeEnv: process.env.NODE_ENV,
    };

    logContactMail("Preparing contact form email", mailContext);

    if (!senderAddress || !emailPassword) {
      logContactMailError(
        "SMTP credentials are missing",
        new Error("SMTP credentials are missing"),
        mailContext,
      );

      return NextResponse.json(
        { error: "Mail server is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: senderAddress,
        pass: emailPassword,
      },
      requireTLS: true,
      tls: {
        rejectUnauthorized: false,
      },
      socketTimeout: 60000,
      connectionTimeout: 60000,
    });

    logContactMail("Verifying SMTP connection", mailContext);

    await transporter.verify();

    logContactMail("SMTP connection verified", mailContext);

    const info = await transporter.sendMail({
      from: {
        name: customerName
          ? `${recipientOption.label} Contact: ${customerName}`
          : `${recipientOption.label} Contact Form`,
        address: senderAddress,
      },
      replyTo: email,
      to: recipientOption.email,
      subject: emailSubject,
      text: message,
      html: `
        <div>
          <h2>Write to: ${recipientOption.label}</h2>
          <h2>Customer name: ${firstName} ${lastName}</h2>
          <h3>Customer phone: ${phoneNumber}</h3>
          <h3>Customer email: ${email}</h3>
          <h3>Customer company: ${company}</h3>
          <h3>Customer message: </h3>
          <p>${message}</p>
        </div>
      `,
    });

    logContactMail("Email sent successfully", {
      ...mailContext,
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    return NextResponse.json({ info });
  } catch (error) {
    logContactMailError("Send mail failed", error, {
      nodeEnv: process.env.NODE_ENV,
    });

    return NextResponse.json({ error: "Failed to send mail." }, { status: 500 });
  }
};
