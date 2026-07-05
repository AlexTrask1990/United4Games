export enum ContactFormKeys {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  EMAIL = "email",
  PHONE_NUMBER = "phoneNumber",
  COMPANY = "company",
  SUBJECT = "subject",
  MESSAGE = "message",
  RECAPTCHA = "recaptcha",
}

export type ContactFormData = {
  [ContactFormKeys.FIRST_NAME]: string;
  [ContactFormKeys.LAST_NAME]: string;
  [ContactFormKeys.EMAIL]: string;
  [ContactFormKeys.PHONE_NUMBER]?: string;
  [ContactFormKeys.COMPANY]?: string;
  [ContactFormKeys.SUBJECT]?: string;
  [ContactFormKeys.MESSAGE]?: string;
  [ContactFormKeys.RECAPTCHA]?: string;
};
