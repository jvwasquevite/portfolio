import React from 'react'
import { useTranslation } from 'react-i18next'
import './style.css'

const LangSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <div id="LangSwitcher">
      <select
        value={i18n.language}
        onChange={e => i18n.changeLanguage(e.target.value)}
      >
        <option value="pt">PT-BR</option>
        <option value="en">EN-US</option>
      </select>
    </div>
  )
}

export default LangSwitcher
