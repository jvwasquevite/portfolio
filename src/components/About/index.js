import React from 'react'
import './style.css'

import Parser from 'html-react-parser'
import { useTranslation } from 'react-i18next'

import SocialIcons from '../helpers/SocialIcons'

const About = () => {
  const { t } = useTranslation()

  return (
    <div id="About">
      <p className="sub-header">{t('head.subheader')}</p>
      <h1>{Parser(t('head.header'))}</h1>
      <p>{Parser(t('head.content'))}</p>
      <div class="social">
        <SocialIcons />
      </div>
    </div>
  )
}

export default About