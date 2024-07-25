export const i18n = {
  defaultLocale: "en-GB",
  locales: ["en-GB", "sv-SE", "ar-001"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
