import React from 'react'
import Background from '../Background'
import './style.css'

import HubspotForm from 'react-hubspot-form'
import Head from '../Head'
import Foot from '../Foot'
import Arrow from '../Arrow'

const Checkout = () => {
  return (
    <div className="Doce22">
      <Background />
      <div className="section full-screen">
        <Head />
        <div>
          <h3 className="sub-title">Checkout</h3>
          <h1 className="title">VIP List</h1>
        </div>
        <Arrow to="checkout" title="Continuar" />
      </div>
      <div className="Checkout" id="checkout">
        <div className="content">
          <div className="box">
            <HubspotForm
              portalId="21942175"
              formId="c7ed9041-eb8f-4275-b084-ae909f1eb243"
              onSubmit={() => console.log('Submit!')}
              onReady={form => console.log('Form ready!')}
              loading={<div>Carregando...</div>}
            />
          </div>
        </div>
        <Foot />
      </div>
    </div>
  )
}

export default Checkout
