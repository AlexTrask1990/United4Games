"use client";

import Link from "next/link";
import { useState } from "react";
import { Controller, Resolver, SubmitHandler, useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormFields, ContactFormKeys } from "@/app/types/contactForm";
import { contactFormSchema } from "@/app/types/contactFormValidation";
import {
  hasRecaptchaSiteKey,
  RecaptchaField,
} from "@/app/ui/ContactForm/RecaptchaField";
import { ContactRecipientField } from "@/app/ui/ContactForm/ContactRecipientField";
import { sendContactMail } from "@/app/lib/sendContactMail";
import { defaultContactRecipient } from "@/app/lib/contactRecipients";
import { socialLinks } from "@/app/lib/socialLinks";
import { Button } from "@/app/ui/Button/Button";
import { LinkedInIcon } from "@/app/ui/Social/SocialLinks";
import { Loading } from "@/app/ui/Loading/Loading";
import { SuccessMessage } from "@/app/ui/SuccessMessage/SuccessMessage";

const linkedInLink = socialLinks.find((link) => link.id === "linkedin");
const linkedInHref =
  linkedInLink?.href ?? "https://www.linkedin.com/company/united4games/";

const getFieldClassName = (hasError: boolean) =>
  `form-input ${hasError ? "form-input-error" : ""}`;

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [recaptchaKey, setRecaptchaKey] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormFields>({
    resolver: yupResolver(contactFormSchema) as Resolver<ContactFormFields>,
  });

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    setIsLoading(true);

    const isSent = await sendContactMail({
      ...data,
      recipient: defaultContactRecipient,
    });

    if (isSent) {
      setSuccess(true);
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        subject: "",
        recaptcha: "",
        message: "",
      });
      if (hasRecaptchaSiteKey) {
        setRecaptchaKey((currentKey) => currentKey + 1);
      }
    } else {
      setSuccess(false);
    }

    setIsLoading(false);
  };

  return (
    <div className="relative w-full rounded-custom border border-primary/10 bg-white p-4 shadow-sm laptop:p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContactRecipientField />

        <div className="laptop:flex laptop:justify-between laptop:gap-4">
          <label className="form-field relative w-full laptop:min-w-[300px]">
            <span className="form-label">
              First Name<span className="text-accent-red">*</span>
            </span>
            <input
              type="text"
              maxLength={41}
              className={getFieldClassName(Boolean(errors.firstName))}
              {...register(ContactFormKeys.FIRST_NAME, {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.firstName && (
              <p className="form-error">{errors.firstName.message}</p>
            )}
          </label>

          <label className="form-field relative w-full laptop:min-w-[300px]">
            <span className="form-label">
              Last Name<span className="text-accent-red">*</span>
            </span>
            <input
              type="text"
              maxLength={41}
              className={getFieldClassName(Boolean(errors.lastName))}
              {...register(ContactFormKeys.LAST_NAME, {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.lastName && (
              <p className="form-error">{errors.lastName.message}</p>
            )}
          </label>
        </div>

        <div className="laptop:flex laptop:justify-between laptop:gap-4">
          <label className="form-field relative w-full laptop:min-w-[300px]">
            <span className="form-label">
              Email<span className="text-accent-red">*</span>
            </span>
            <input
              type="text"
              maxLength={38}
              className={getFieldClassName(Boolean(errors.email))}
              {...register(ContactFormKeys.EMAIL, { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}
          </label>

          <label className="form-field relative w-full laptop:min-w-[300px]">
            <span className="form-label">
              Phone Number{" "}
              <span className="text-xs text-gray-50">(optional)</span>
            </span>
            <PhoneInputWithCountry
              name={ContactFormKeys.PHONE_NUMBER}
              defaultCountry="GB"
              international
              countryCallingCodeEditable={false}
              control={control}
              rules={{ required: false }}
              withCountryCallingCode
              maxLength={16}
              className={getFieldClassName(Boolean(errors.phoneNumber))}
            />
            {errors.phoneNumber && (
              <p className="form-error">{errors.phoneNumber.message}</p>
            )}
          </label>
        </div>

        <label className="form-field relative w-full">
          <span className="form-label">Company</span>
          <input
            type="text"
            maxLength={50}
            className={getFieldClassName(Boolean(errors.company))}
            {...register(ContactFormKeys.COMPANY, { required: false })}
          />
          {errors.company && (
            <p className="form-error">{errors.company.message}</p>
          )}
        </label>

        <label className="form-field relative w-full">
          <span className="form-label">Subject</span>
          <input
            maxLength={50}
            type="text"
            className={getFieldClassName(Boolean(errors.subject))}
            {...register(ContactFormKeys.SUBJECT, { required: false })}
          />
          {errors.subject && (
            <p className="form-error">{errors.subject.message}</p>
          )}
        </label>

        <label className="form-field relative">
          <span className="form-label">Message</span>
          <textarea
            maxLength={500}
            className={`form-input min-h-24 py-3 ${errors.message ? "form-input-error" : ""}`}
            {...register(ContactFormKeys.MESSAGE, { required: false })}
          />
          {errors.message && (
            <p className="form-error">{errors.message.message}</p>
          )}
        </label>

        <Controller
          name={ContactFormKeys.RECAPTCHA}
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange } }) => (
            <RecaptchaField
              key={recaptchaKey}
              onChange={onChange}
              className="pt-6"
            />
          )}
        />
        {errors.recaptcha && (
          <p className="pt-2 text-sm text-accent-red">{errors.recaptcha.message}</p>
        )}

        <div className="flex justify-between pt-6">
          <Button
            label="Submit"
            type="submit"
            aria-label="Submit contact form"
            className="w-[170px] btn-secondary"
          />
          <Link
            href={linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn link"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            <LinkedInIcon className="block h-6 w-6 shrink-0" />
          </Link>
        </div>
      </form>

      {isLoading && <Loading />}
      {success && (
        <SuccessMessage
          message="Thank you for contacting us! Your message has been successfully sent. We will get back to you as soon as possible."
          success={success}
          onClose={setSuccess}
        />
      )}
    </div>
  );
};
