import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationSK from "./locales/sk/translation.json";
import translationEN from "./locales/en/translation.json";

// the translations
// (tip move them in a JSON file and import them)

const resources = {
  en: {
    translation: translationEN,
  },
  sk: {
    translation: translationSK,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "sk",
    debug: true,


    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
