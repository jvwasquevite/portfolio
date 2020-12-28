import React, { useState } from 'react'
import './style.css'

import { useTranslation } from 'react-i18next'
import Parser from 'html-react-parser'

import arrowNext from '../../assets/images/arrow-right.svg'

const Portfolio = () => {
  const [slidePosition, setSlidePosition] = useState(0)
  const { t } = useTranslation()

  const portfolio = t('portfolio.content', { returnObjects: true })

  const nextSlide = () => {
    const slideWidth = document.getElementById('slide').clientWidth

    if (Math.abs(slidePosition) <= (portfolio.length - 2) * (slideWidth + 30)) {
      setSlidePosition(slidePosition - (slideWidth + 30))
    } else {
      setSlidePosition(0)
    }
  }

  return (
    <section id="Portfolio">
      <div className="slider">
        <div className="content" style={{ left: slidePosition }}>
          {portfolio.map((item, key) => {
            return (
              <div id="slide" className="slide" key={key}>
                <div className="mockup">
                  <img
                    src={item.images[0]}
                    alt={item.header}
                    className="desktop"
                  />
                  <img
                    src={item.images[1]}
                    alt={item.header}
                    className="mobile"
                  />
                </div>
                <p className="sub-header">{item.subheader}</p>
                <h2>{item.header}</h2>
                <div className="skills">
                  {item.skills.map((skill, key) => (
                    <div className="skill" key={key}>
                      {skill}
                    </div>
                  ))}
                </div>
                <p className="secondary-text">{Parser(item.description)}</p>
                {item.button ? (
                  <a
                    href={item.button[1]}
                    className="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <hr /> {item.button[0]}
                  </a>
                ) : null}
              </div>
            )
          })}
        </div>
        <div className="next" onClick={() => nextSlide()}>
          <img src={arrowNext} alt="next" />
        </div>
      </div>
      <a
        href={t('portfolio.button.url')}
        className="button more"
        target="_blank"
        rel="noreferrer"
      >
        <hr /> {t('portfolio.button.name')}
      </a>
    </section>
  )
}

export default Portfolio
