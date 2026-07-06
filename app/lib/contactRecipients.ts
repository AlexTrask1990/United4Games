export const ContactRecipient = {
  UNITED4GAMES: "united4games",
  UNITED4DIGITAL: "united4digital",
} as const;

export type ContactRecipientValue =
  (typeof ContactRecipient)[keyof typeof ContactRecipient];

export interface ContactRecipientOption {
  value: ContactRecipientValue;
  label: string;
  shortLabel: string;
  email: string;
}

const readSupportEmail = (
  environmentKey: string,
  fallback: string,
): string => {
  const value = process.env[environmentKey]?.trim();

  return value || fallback;
};

export const contactRecipientOptions: ContactRecipientOption[] = [
  {
    value: ContactRecipient.UNITED4GAMES,
    label: "United4Games",
    shortLabel: "U4G",
    email: readSupportEmail("SUPPORT_EMAIL_U4G", "support@united4games.com"),
  },
  {
    value: ContactRecipient.UNITED4DIGITAL,
    label: "United4Digital",
    shortLabel: "U4D",
    email: readSupportEmail(
      "SUPPORT_EMAIL_U4D",
      "support@united4digital.com",
    ),
  },
];

export const defaultContactRecipient = ContactRecipient.UNITED4GAMES;

export const getContactRecipientOption = (
  recipient: ContactRecipientValue,
): ContactRecipientOption => {
  const option = contactRecipientOptions.find(
    (contactRecipient) => contactRecipient.value === recipient,
  );

  if (!option) {
    return contactRecipientOptions[0];
  }

  return option;
};

export const isContactRecipientValue = (
  value: string,
): value is ContactRecipientValue => {
  return contactRecipientOptions.some(
    (contactRecipient) => contactRecipient.value === value,
  );
};
