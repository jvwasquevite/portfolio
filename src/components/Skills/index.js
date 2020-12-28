import React, { useEffect, useState } from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'
import Parser from 'html-react-parser'
import useScrollPosition from '@react-hook/window-scroll'

const Skills = () => {
  const { t } = useTranslation()

  const scrollY = useScrollPosition(60)
  const [bar, setBar] = useState(false)

  useEffect(() => {
    if (scrollY > 1000 && bar === false) {
      setBar(true)
    }
  }, [scrollY, bar])

  return (
    <section id="Skills">
      {t('skills.content', { returnObjects: true }).map((item, key) => {
        return (
          <div className="container" key={key}>
            <div className="content">
              <p className="sub-header">{item.subheader}</p>
              <h3>{item.header}</h3>
              <p className="secondary-text">{item.secondarytext}</p>
            </div>
            <div
              className="bar"
              style={bar ? { width: `${item.level}` } : null}
            />
          </div>
        )
      })}
      <p className="other">{Parser(t('skills.other'))}</p>
    </section>
  )
}

export default Skills
