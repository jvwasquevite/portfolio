import React from 'react'
import { Link } from 'react-scroll'
import './style.css'

import Parser from 'html-react-parser'
import { useTranslation } from 'react-i18next'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/social-icons/facebook.svg'
import linkedin from '../../assets/images/social-icons/linkedin.svg'
import behance from '../../assets/images/social-icons/behance.svg'
import github from '../../assets/images/social-icons/github.svg'
import whatsapp from '../../assets/images/social-icons/whatsapp.svg'

const Head = () => {
  const { t, i18n } = useTranslation()

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
    <section id="Head">
      <div className="content">
        <img src={logo} alt="logo" />
        <p className="sub-header">{t('head.subheader')}</p>
        <h1>{Parser(t('head.header'))}</h1>
        <p>{Parser(t('head.content'))}</p>

        <nav>
          <ul>
            {t('head.menu', { returnObjects: true }).map(item => {
              return (
                <li>
                  <Link
                    activeClass="active"
                    to={item.path}
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <hr /> {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="social">
          {social.map(icon => {
            return (
              <a
                href={icon.url}
                style={{ background: icon.color }}
                target="_blank"
                rel="noreferrer"
              >
                <img src={icon.path} alt={icon.path} />
              </a>
            )
          })}
          <select
            value={i18n.language}
            onChange={e => i18n.changeLanguage(e.target.value)}
          >
            <option value="pt">PT-BR</option>
            <option value="en">EN-US</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default Head
