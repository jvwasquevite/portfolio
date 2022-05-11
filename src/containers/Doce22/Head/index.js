import React from 'react'
import './style.css'

import logo from '../../../assets/images/logo.svg'

const Head = () => {
  return (
    <div className="Head">
      <img src={logo} className="jvwasquevite" alt="Logo" />
      <div className="logo">
        <h3>Meus</h3>
        <div className="glitch-text">
          Doce 22
          <div className="glitch-text__clip">Doce 22</div>
        </div>
      </div>
    </div>
  )
}

export default Head
