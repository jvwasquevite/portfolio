import React, { useState } from 'react'
import './style.css'

import LangSwitcher from '../helpers/LangSwitcher'
import Menu from '../helpers/Menu'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div id="Navbar">
      {menu && (
        <div className="menu">
          <Menu onClick={() => setMenu(false)} />
        </div>
      )}
      <div className="container">
        <div className="mobile-menu">
          <div
            className="menu-switcher button"
            onClick={() => (menu ? setMenu(false) : setMenu(true))}
          >
            {menu ? 'Fechar menu' : 'Abrir menu'}
          </div>
        </div>
        <div className="lang-switcher">
          <LangSwitcher />
        </div>
      </div>
    </div>
  )
}

export default Navbar
