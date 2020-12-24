import React from 'react'
import './style.css'

import logo from '../../assets/images/logo.svg'

const Head = () => {
  return (
    <section id="Head">
      <div className="content">
        <img src={logo} alt="logo" />
        <p className="sub-header">Sobre mim</p>
        <h1>
          Prazer, pode me chamar de <b>João</b>.
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
              <a href="#resume">
                <hr /> Resumo
              </a>
            </li>
            <li>
              <a href="#skills">
                <hr /> Skills
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <hr /> Portfólio
              </a>
            </li>
            <li>
              <a href="#articles">
                <hr /> Artigos
              </a>
            </li>
            <li>
              <a href="#contact">
                <hr /> Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Head
