import React from 'react'
import './style.css'

import About from '../About'
import Menu from '../helpers/Menu'
import SocialIcons from '../helpers/SocialIcons'
import LangSwitcher from '../helpers/LangSwitcher'

import logo from '../../assets/images/logo.gif'

const Head = () => {
  return (
    <header id="Head">
      <img src={logo} alt="logo" className="logo" />
      <div className="content">
        <div className="about">
          <About />
        </div>
        <div className="menu">
          <Menu />
        </div>
        <div className="foot">
          <SocialIcons />
          <LangSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Head
