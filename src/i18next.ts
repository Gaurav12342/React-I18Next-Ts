import { FC } from "react";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn = { welcome: "Welcome !!!" };
const translationFr = { welcome: "Bienvenue !!!" };
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    fr: {
      translation: translationFr,
    },
  },
  lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
