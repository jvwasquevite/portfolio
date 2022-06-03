import React from 'react'
import HubspotForm from 'react-hubspot-form'
import './style.css'

import Background from '../../../Background'
import { Link } from 'react-router-dom'

import back from '../../assets/back.png'
import Logo from '../../Logo'
import Foot from '../../../Foot'

const Update = () => {
  const handleSubmit = event => {
    event.preventDefault()
    window.location.href = '/doce22/tinder/profile'
  }

  return (
    <div className="Doce22 Update">
      <Background />
      <div className="Tinder section">
        <div className="head">
          <div className="item">
            <Link to="/doce22/tinder/profile">
              <img src={back} alt="Voltar" />
              <span>Voltar</span>
            </Link>
          </div>
          <Logo />
          <div className="item"></div>
        </div>
        <div>
          <div className="box">
            <HubspotForm
              portalId="21942175"
              formId="3bd4ad4b-5e33-473c-9f59-0c452ceba9bc"
              onSubmit={handleSubmit}
            />
          </div>
        </div>
        <Foot />
      </div>
    </div>
  )
}

export default Update
