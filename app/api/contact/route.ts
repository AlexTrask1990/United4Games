import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supportEmail } from "@/app/lib/socialLinks";

export const POST = async (request: Request) => {
  try {
    const {
      firstName = "",
      lastName = "",
      email = "",
      phoneNumber = "",
      company = "",
      subject = "",
      message = "",
    } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SUPPORT_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
      socketTimeout: 60000,
      connectionTimeout: 60000,
    });

    const info = await transporter.sendMail({
      from: {
        name: `${firstName} ${lastName}`,
        address: email,
      },
      to: supportEmail,
      subject,
      text: message,
      html: `
        <div>
          <h2>Customer name: ${firstName} ${lastName}</h2>
          <h3>Customer phone: ${phoneNumber}</h3>
          <h3>Customer email: ${email}</h3>
          <h3>Customer company: ${company}</h3>
          <h3>Customer message: </h3>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ info });
  } catch (error) {
    console.error("Send mail error:", error);
    return NextResponse.json({ error: "Failed to send mail." }, { status: 500 });
  }
};
