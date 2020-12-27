import React from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

const Menu = () => {
  const { t } = useTranslation()
  const menu = t('head.menu', { returnObjects: true })

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
                  offset={0}
                  duration={1000}
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
