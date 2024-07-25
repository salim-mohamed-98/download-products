import "server-only";
import { Locale } from "./i18n";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  "en-GB": () =>
    import("@/dictionaries/en-GB.json").then((module) => module.default),
  "sv-SE": () =>
    import("@/dictionaries/sv-SE.json").then((module) => module.default),
  "ar-001": () =>
    import("@/dictionaries/ar-001.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries["en-GB"]();
