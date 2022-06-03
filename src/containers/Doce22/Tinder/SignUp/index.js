import React from 'react'
import './style.css'

import HubspotForm from 'react-hubspot-form'
import Background from '../../Background'
import Foot from '../../Foot'
import Logo from '../Logo'

import back from '../assets/back.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="Doce22 Signup">
      <Background />
      <div className="Tinder section">
        <div className="head">
          <div className="item">
            <Link to="/doce22/tinder">
              <img src={back} alt="Voltar" />
              <span>Voltar</span>
            </Link>
          </div>
          <Logo />
          <div className="item"></div>
        </div>

        <div className="box">
          <HubspotForm
            portalId="21942175"
            formId="9c9e2466-7d73-40d0-b5c2-5d905ab22e99"
            onSubmit={() => (window.location.href = '/doce22/tinder')}
          />
        </div>
        <Foot />
      </div>
    </div>
  )
}

export default SignUp
