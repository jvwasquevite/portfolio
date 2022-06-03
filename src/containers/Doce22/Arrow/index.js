import React from 'react'
import './style.css'

import { Link } from 'react-scroll'
import arrow_down from '../../../assets/images/arrow-down.svg'

const Arrow = ({ up, to, title }) => {
  return up ? (
    <Link to={to} spy={true} smooth={true} duration={1000}>
      <div className="Arrow up">
        <img src={arrow_down} alt="Arrow down" />
        <p>{title}</p>
      </div>
    </Link>
  ) : (
    <Link to={to} spy={true} smooth={true} duration={1000}>
      <div className="Arrow">
        <p>{title}</p>
        <img src={arrow_down} alt="Arrow down" />
      </div>
    </Link>
  )
}

export default Arrow
