import * as yup from "yup";
import { ContactFormKeys } from "@/app/types/contactForm";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export const contactFormSchema = yup
  .object({
    [ContactFormKeys.FIRST_NAME]: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Only letters are allowed")
      .required("First name is required"),
    [ContactFormKeys.LAST_NAME]: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Only letters are allowed")
      .required("Last name is required"),
    [ContactFormKeys.EMAIL]: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    [ContactFormKeys.PHONE_NUMBER]: yup
      .string()
      .max(15, "Phone number must be at most 15 characters.")
      .optional(),
    [ContactFormKeys.COMPANY]: yup
      .string()
      .max(50, "Company name must be at most 50 characters.")
      .optional(),
    [ContactFormKeys.SUBJECT]: yup
      .string()
      .max(50, "Subject must be at most 50 characters.")
      .optional(),
    [ContactFormKeys.MESSAGE]: yup
      .string()
      .max(500, "Message must be at most 500 characters.")
      .optional(),
    [ContactFormKeys.RECAPTCHA]: recaptchaSiteKey
      ? yup
          .string()
          .required("You must confirm that you are not a robot")
      : yup.string().optional(),
  })
  .required();
