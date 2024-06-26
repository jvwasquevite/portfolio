import React, { useContext } from "react"
import "./style.css"

import { useTranslation } from "react-i18next"
import { Link } from "react-scroll"

import { MenuContext } from "../../../contexts/MenuContext"

const Menu = () => {
  const { t } = useTranslation()
  const menu = t("head.menu", { returnObjects: true })

  const { setActive } = useContext(MenuContext)

  return (
    <div id="Menu">
      <nav>
        <ul>
          {menu.map((item, key) => {
            return (
              <li key={key}>
                <Link
                  activeClass="active"
                  to={item.path}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => setActive(item.name)}
                  onSetInactive={() => key === 0 && setActive("Menu")}
                >
                  <hr /> {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
