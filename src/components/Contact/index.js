import React from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'
import Parser from 'html-react-parser'

const Contact = () => {
  const { t } = useTranslation()

  const content = t('contact.content', { returnObjects: true })

  return (
    <section id="Contact">
      <div className="head">
        <p className="sub-header">{t('contact.subheader')}</p>
        <h2>{Parser(t('contact.header'))}</h2>
      </div>
      <div className="container">
        {content.map((item, key) => {
          return (
            <div className="content" key={key}>
              <p className="sub-header">{t(item.subheader)}</p>
              <h3>{t(item.header)}</h3>
            </div>
          )
        })}
      </div>
      <a
        href={t('contact.button.url')}
        className="button more"
        target="_blank"
        rel="noreferrer"
      >
        <hr /> {t('contact.button.name')}
      </a>
    </section>
  )
}

export default Contact
