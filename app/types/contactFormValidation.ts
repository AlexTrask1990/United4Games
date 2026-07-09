import * as yup from "yup";
import {
  ContactRecipient,
  contactRecipientOptions,
} from "@/app/lib/contactRecipients";
import { isRecaptchaEnabled } from "@/app/lib/recaptcha";
import { ContactFormKeys } from "@/app/types/contactForm";

const recipientValues = contactRecipientOptions.map(
  (contactRecipient) => contactRecipient.value,
);

export const contactFormSchema = yup
  .object({
    [ContactFormKeys.RECIPIENT]: yup
      .string()
      .oneOf(recipientValues, "Please select who you want to contact")
      .required("Please select who you want to contact")
      .default(ContactRecipient.UNITED4GAMES),
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
    [ContactFormKeys.RECAPTCHA]: isRecaptchaEnabled
      ? yup
          .string()
          .required("You must confirm that you are not a robot")
      : yup.string().optional(),
  })
  .required();
