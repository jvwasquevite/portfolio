import React from 'react'
import { useTranslation } from 'react-i18next'

const LangSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <div id="LangSwitcher">
      <button
        onClick={() =>
          i18n.language === 'pt'
            ? i18n.changeLanguage('en')
            : i18n.changeLanguage('pt')
        }
      >
        {i18n.language === 'pt' ? 'EN-US' : 'PT-BR'}
      </button>
    </div>
  )
}

export default LangSwitcher
