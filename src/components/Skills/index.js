import React, { useEffect } from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()

  return (
    <section id="Skills">
      {t('skills', { returnObjects: true }).map(item => {
        return (
          <div className="container">
            <div className="content">
              <p className="sub-header">{item.subheader}</p>
              <h3>{item.header}</h3>
              <p class="secondary-text">{item.secondarytext}</p>
            </div>
            <div className="bar" style={{ width: `${item.level}` }} />
          </div>
        )
      })}
      <p>
        <b>Outras habilidades:</b> Wordpress/Landing Pages, Copywriting, SEO,
        Inbound Marketing, Illustrator e Photoshop.
      </p>
    </section>
  )
}

export default Skills
