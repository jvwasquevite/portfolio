import React from 'react'
import './style.css'

import Parser from 'html-react-parser'
import { useTranslation } from 'react-i18next'

import LangSwitcher from './LangSwitcher'
import Menu from './Menu'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/social-icons/facebook.svg'
import linkedin from '../../assets/images/social-icons/linkedin.svg'
import behance from '../../assets/images/social-icons/behance.svg'
import github from '../../assets/images/social-icons/github.svg'
import whatsapp from '../../assets/images/social-icons/whatsapp.svg'

const Head = () => {
  const { t } = useTranslation()

  const social = [
    {
      path: facebook,
      url: 'https://www.facebook.com/jvwasquevite',
      color: '#3A5A99',
    },
    {
      path: linkedin,
      url: 'https://www.linkedin.com/in/jvwasquevite/',
      color: '#0076B2',
    },
    {
      path: behance,
      url: 'https://www.behance.net/jvwasquevite',
      color: '#1D6FED',
    },
    {
      path: github,
      url: 'https://github.com/jvwasquevite/',
      color: '#3F91CB',
    },
    {
      path: whatsapp,
      url: 'https://api.whatsapp.com/send?phone=5555997128005',
      color: '#25D366',
    },
  ]

  console.log()

  return (
    <header id="Head">
      <div className="content">
        <img src={logo} alt="logo" className="logo" />
        <p className="sub-header">{t('head.subheader')}</p>
        <h1>{Parser(t('head.header'))}</h1>
        <p>{Parser(t('head.content'))}</p>

        <Menu />

        <div className="social">
          {social.map((icon, key) => {
            return (
              <a
                href={icon.url}
                style={{ background: icon.color }}
                target="_blank"
                rel="noreferrer"
                key={key}
              >
                <img src={icon.path} alt={icon.path} />
              </a>
            )
          })}
          <LangSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Head
