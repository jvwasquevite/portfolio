import React from 'react'

const Hero = ({ title, subtitle, description }) => {
  return (
    <div className="Hero">
      <h3 className="sub-title">{subtitle}</h3>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default Hero
