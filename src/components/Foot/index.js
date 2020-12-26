import React from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'
import Parser from 'html-react-parser'

const Foot = () => {
  const { t } = useTranslation()

  const links = t('foot.links', { returnObjects: true })

  return (
    <footer id="Foot">
      <p>{Parser(t('foot.text'))}</p>

      <div className="links">
        {links.map(link => {
          return (
            <a href={t(link.url)} target="_blank" rel="noreferrer">
              {t(link.name)}
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Foot
