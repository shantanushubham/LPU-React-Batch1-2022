import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "To get started, follow me on LinkedIn":
            "To get started, follow me on LinkedIn",
          "Welcome to React": "Welcome to React",
          welcome: "Hello <br/> <strong>World</strong>",
        },
      },
      de: {
        translations: {
          "To get started, follow me on LinkedIn":
            "Um loszulegen, folgen Sie mir auf LinkedIn",
          "Welcome to React": "Willkommen bei React",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
