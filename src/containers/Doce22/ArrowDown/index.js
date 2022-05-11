import React from 'react'
import './style.css'

import { Link } from 'react-scroll'
import arrow_down from '../../../assets/images/arrow-down.svg'

const ArrowDown = ({ to, title }) => {
  return (
    <Link to={to} spy={true} smooth={true} duration={1000}>
      <div className="ArrowDown">
        <p>{title}</p>
        <img src={arrow_down} alt="Arrow down" />
      </div>
    </Link>
  )
}

export default ArrowDown
