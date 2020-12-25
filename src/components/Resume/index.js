import React from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'
import Parser from 'html-react-parser'

const Resume = () => {
  const { t } = useTranslation()

  return (
    <section id="Resume">
      {t('resume.main', { returnObjects: true }).map((item, key) => {
        return (
          <div className="container" key={key}>
            <div className="image">
              <img src={item.image} alt={item.header} />
            </div>
            <div className="content">
              <p className="sub-header">{item.subheader}</p>
              <h2>{item.header}</h2>
              <h3>{item.description}</h3>
              <p className="secondary-text">{Parser(item.secondarytext)}</p>
            </div>
          </div>
        )
      })}

      <div className="secondary">
        {t('resume.secondary', { returnObjects: true }).map((item, key) => {
          return (
            <div className="container half" key={key}>
              <div className="content">
                <p className="sub-header">{item.subheader}</p>
                <h3>{item.header}</h3>
                <p className="secondary-text">{Parser(item.secondarytext)}</p>
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
