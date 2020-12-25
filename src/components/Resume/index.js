import React from 'react'
import './style.css'

import Parser from 'html-react-parser'
import { useTranslation } from 'react-i18next'

const Resume = () => {
  const { t } = useTranslation()

  return (
    <section id="Resume">
      {t('resume.main', { returnObjects: true }).map(item => {
        return (
          <div className="container">
            <div className="image">
              <img src={item.image} alt={item.header} />
            </div>
            <div className="content">
              <p className="sub-header">{item.subheader}</p>
              <h2>{item.header}</h2>
              <h3>{item.description}</h3>
              <p class="secondary-text">{Parser(item.secondarytext)}</p>
            </div>
          </div>
        )
      })}

      <div className="secondary">
        {t('resume.secondary', { returnObjects: true }).map(item => {
          return (
            <div className="container half">
              <div className="content">
                <p className="sub-header">{item.subheader}</p>
                <h3>{item.header}</h3>
                <p class="secondary-text">{Parser(item.secondarytext)}</p>
              </div>
            </div>
          )
        })}
      </div>
      <a
        href="https://www.linkedin.com/in/jvwasquevite/"
        className="button"
        target="_blank"
        rel="noreferrer"
      >
        <hr /> {t('resume.button')}
      </a>
    </section>
  )
}

export default Resume
