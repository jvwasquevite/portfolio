import React from 'react'

import Parser from 'html-react-parser'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <div id="About">
      <p className="sub-header">{t('head.subheader')}</p>
      <h1>{Parser(t('head.header'))}</h1>
      <p>{Parser(t('head.content'))}</p>
    </div>
  )
}

export default About
