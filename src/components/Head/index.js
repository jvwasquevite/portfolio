import React from 'react'
import { Link } from 'react-scroll'
import './style.css'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/social-icons/facebook.svg'
import linkedin from '../../assets/images/social-icons/linkedin.svg'
import behance from '../../assets/images/social-icons/behance.svg'
import github from '../../assets/images/social-icons/github.svg'
import whatsapp from '../../assets/images/social-icons/whatsapp.svg'

const Head = () => {
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

  return (
    <section id="Head">
      <div className="content">
        <img src={logo} alt="logo" />
        <p className="sub-header">Sobre mim</p>
        <h1>
          Prazer, sou o <b>João</b>.
        </h1>
        <p>
          Graduando em Ciência da Computação pela{' '}
          <a
            href="https://portal.ufpel.edu.br/"
            target="_blank"
            rel="noreferrer"
          >
            Universidade Federal de Pelotas
          </a>
          , atuo como desenvolvedor freelancer e diretor presidente na{' '}
          <a href="http://hut8.com.br/" target="_blank" rel="noreferrer">
            Hut8
          </a>
          . Sou apaixonado por tudo relacionado a inovação tecnológica,
          empreendedorismo e processos criativos: desde o design até a
          programação.
        </p>

        <nav>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="Resume"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <hr /> Resumo
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Skills"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <hr /> Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Portfolio"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <hr /> Portfólio
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Articles"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <hr /> Artigos
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <hr /> Contato
              </Link>
            </li>
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
        </div>
      </div>
    </section>
  )
}

export default Head
