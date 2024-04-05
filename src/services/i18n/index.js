import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import resources from "./locales"

const i18nConfig = {
  resources,
  fallbackLng: "pt",
}

i18n.use(initReactI18next).use(LanguageDetector).init(i18nConfig)

export default i18n
