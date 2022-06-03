import React from 'react'
import './style.css'

import logo from '../../../assets/images/logo.svg'

const Head = ({ title, subtitle }) => {
  return (
    <div className="Head">
      <img src={logo} className="jvwasquevite" alt="Logo" />
      <div className="logo">
        <h3>{subtitle}</h3>
        <div className="glitch-text">
          {title}
          <div className="glitch-text__clip" title={title}>
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head
