import React, { useContext, useState } from "react"
import "./style.css"

import { MenuContext } from "../../contexts/MenuContext"
import LangSwitcher from "../utils/LangSwitcher"
import Menu from "../utils/Menu"

import navArrow from "../../assets/images/nav-arrow.svg"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const { active } = useContext(MenuContext)

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
            {menu ? (
              <>
                {active}{" "}
                <img src={navArrow} className="arrow open" alt="Close menu" />
              </>
            ) : (
              <>
                {active}{" "}
                <img src={navArrow} className="arrow" alt="Open menu" />
              </>
            )}
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
