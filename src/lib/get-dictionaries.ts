import "server-only";
import { Locale } from "./i18n";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  "en-GB": () =>
    import("@/dictionaries/en-GB.json").then((module) => module.default),
  "nl-NL": () =>
    import("@/dictionaries/nl-NL.json").then((module) => module.default),
  "de-DE": () =>
    import("@/dictionaries/de-DE.json").then((module) => module.default),
  "fr-FR": () =>
    import("@/dictionaries/fr-FR.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries["en-GB"]();
