import React from 'react'
import './style.css'

import { Link } from 'react-scroll'

const Information = () => {
  return (
    <div className="Information">
      <div className="sale">
        <h3 className="sub-title">Open bar à venda</h3>
        <h1 className="title">Polar e Kit</h1>
        <p className="description">À partir de R$30 no 1º lote</p>
        <Link to="ticket" spy={true} smooth={true} duration={1000}>
          <p className="scroll-to">Comprar agora →</p>
        </Link>
      </div>
      <div className="info">
        <h3 className="sub-title">10.Junho.2022</h3>
        <h1 className="title">Hype Pub</h1>
        <p className="description">À partir das 23h até 05h</p>
        <a
          href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NTJ2bjltcTMwN3FpYXJhc2YwaDF1a2Nlb2oganZ3YXNxdWV2aXRlQG0&tmsrc=jvwasquevite%40gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <p className="scroll-to">Adicionar no Agenda →</p>
        </a>
      </div>
      <div className="lineup">
        <h3 className="sub-title">Principais atrações</h3>
        <h1 className="title">Guto & Myah</h1>
        <p className="description">Fotos, jogos temáticos e muito +!</p>
        <Link to="faq" spy={true} smooth={true} duration={1000}>
          <p className="scroll-to">Mais informações →</p>
        </Link>
      </div>
    </div>
  )
}

export default Information
