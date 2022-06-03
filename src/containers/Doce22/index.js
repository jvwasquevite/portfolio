import React from 'react'
import Background from './Background'
import './style.css'

import Head from './Head'
import Foot from './Foot'
import Ticket from './Ticket'
import Accordeon from './Accordeon'
import Arrow from './Arrow'
import Hero from './Hero'
import Information from './Information'

const Doce22 = () => {
  return (
    <div className="Doce22">
      <Background />
      <div className="section full-screen">
        <Head title="Doce 22" subtitle="Meus" />
        <Hero
          title="Open Bar"
          subtitle="Hype Pub • Pelotas/RS"
          description="Polar & Vodka com energético/Kit"
        />
        <Arrow to="info" title="Mais informações" />
      </div>
      <div className="section full-screen" id="info">
        <Information />
        <Arrow to="ticket" title="Comprar ingressos" />
      </div>
      <div className="section full-screen" id="ticket">
        <Ticket />
        <Arrow to="faq" title="Perguntas frequentes" />
      </div>
      <div className="section auto" id="faq">
        <Accordeon />
        <Foot />
      </div>
    </div>
  )
}

export default Doce22
