export type SmtpProvider = "godaddy" | "microsoft365";

export interface SmtpProfile {
  provider: SmtpProvider;
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
}

const readEnvironmentValue = (environmentKey: string): string =>
  process.env[environmentKey]?.trim() ?? "";

const readEnvironmentNumber = (
  environmentKey: string,
  fallback: number,
): number => {
  const value = Number(readEnvironmentValue(environmentKey));

  return Number.isFinite(value) ? value : fallback;
};

const readEnvironmentBoolean = (
  environmentKey: string,
  fallback: boolean,
): boolean => {
  const value = readEnvironmentValue(environmentKey).toLowerCase();

  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  return fallback;
};

const godaddyDefaults = {
  provider: "godaddy" as const,
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
};

const microsoft365Defaults = {
  provider: "microsoft365" as const,
  host: "smtp.office365.com",
  port: 587,
  secure: false,
};

const getProviderDefaults = (provider: SmtpProvider) => {
  if (provider === "godaddy") {
    return godaddyDefaults;
  }

  return microsoft365Defaults;
};

export const getSmtpProfile = (): SmtpProfile => {
  const providerValue = readEnvironmentValue("SMTP_PROVIDER").toLowerCase();
  const provider: SmtpProvider =
    providerValue === "godaddy" ? "godaddy" : "microsoft365";
  const defaults = getProviderDefaults(provider);

  return {
    provider,
    host: readEnvironmentValue("SMTP_HOST") || defaults.host,
    port: readEnvironmentNumber("SMTP_PORT", defaults.port),
    secure: readEnvironmentBoolean("SMTP_SECURE", defaults.secure),
    user: readEnvironmentValue("SUPPORT_EMAIL"),
    password: readEnvironmentValue("EMAIL_PASSWORD"),
  };
};

export const getSmtpProfileForLogging = (smtpProfile: SmtpProfile) => ({
  provider: smtpProfile.provider,
  host: smtpProfile.host,
  port: smtpProfile.port,
  secure: smtpProfile.secure,
  user: smtpProfile.user,
  hasPassword: Boolean(smtpProfile.password),
  passwordLength: smtpProfile.password.length,
});
