import React from "react"
import "./styles.css"

import { useTranslation } from "react-i18next"

const LangSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <div id="LangSwitcher">
      {i18n.language === "pt" || i18n.language === "pt-BR" ? (
        <button onClick={() => i18n.changeLanguage("en")}>EN-US</button>
      ) : (
        <button onClick={() => i18n.changeLanguage("pt")}>PT-BR</button>
      )}
    </div>
  )
}

export default LangSwitcher
