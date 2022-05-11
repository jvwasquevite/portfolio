import React from 'react'
import Background from './Background'
import './style.css'

import Head from './Head'
import Foot from './Foot'
import Ticket from './Ticket'
import Accordeon from './Accordeon'
import ArrowDown from './ArrowDown'
import Hero from './Hero'
import Information from './Information'

const Doce22 = () => {
  return (
    <div className="Doce22">
      <Background />
      <div className="section full-screen">
        <Head />
        <Hero />
        <ArrowDown to="info" title="Mais informações" />
      </div>
      <div className="section full-screen" id="info">
        <Information />
        <ArrowDown to="ticket" title="Comprar ingressos" />
      </div>
      <div className="section full-screen" id="ticket">
        <Ticket />
        <ArrowDown to="faq" title="Perguntas frequentes" />
      </div>
      <div className="section auto" id="faq">
        <Accordeon />
        <Foot />
      </div>
    </div>
  )
}

export default Doce22
