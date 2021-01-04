import React, { useContext } from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

import { MenuContext } from '../../../services/contexts/MenuContext'

const Menu = () => {
  const { t } = useTranslation()
  const menu = t('head.menu', { returnObjects: true })

  const { setActive } = useContext(MenuContext)

  return (
    <div id="Menu">
      <nav>
        <ul>
          {menu.map((item, key) => {
            const name = item.name
            return (
              <li key={key}>
                <Link
                  activeClass="active"
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-500}
                  duration={1000}
                  onSetActive={() => setActive(name)}
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
