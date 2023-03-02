import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json";
import th from "./i18n/th.json";

i18n.use(initReactI18next).init({
  fallbackLng: "th",
  debug: false,
  ns: ["translation"],
  resources: {
    en: {
      translation: en,

    },
    th: {
      translation: th,
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;