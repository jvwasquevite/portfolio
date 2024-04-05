import React, { useState, useEffect } from "react"
import "./style.css"

import { useTranslation } from "react-i18next"
import Parser from "html-react-parser"

import arrowNext from "../../assets/images/arrow-right.svg"
import { getPortfolio } from "../../services/requests"

const Portfolio = () => {
  const [slidePosition, setSlidePosition] = useState(0)
  const { t, i18n } = useTranslation()
  const [data, setData] = useState([])

  const language = i18n.language

  useEffect(() => {
    getPortfolio(language)
      .then(res => {
        setData(res)
      })
      .catch(err => console.error(err))
  }, [language])

  const portfolio = t("portfolio.content", { returnObjects: true })

  const nextSlide = () => {
    const slideWidth = document.getElementById("slide").clientWidth

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
          {data.map((item, key) => {
            return (
              <div id="slide" className="slide" key={key}>
                <div className="mockup">
                  <img
                    src={item.screenshots.desktop}
                    alt={item.name}
                    className="desktop"
                  />
                  <img
                    src={item.screenshots.mobile}
                    alt={item.name}
                    className="mobile"
                  />
                </div>
                <p className="sub-header">{item.language}</p>
                <h2>{item.name}</h2>
                <div className="skills">
                  {item.topics.map((topic, key) => (
                    <div className="skill" key={key}>
                      {topic}
                    </div>
                  ))}
                </div>
                <div className="secondary-text">{Parser(item.description)}</div>
                {item.url ? (
                  <a
                    href={item.url}
                    className="button see-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <hr /> {language === "pt" ? "Ver projeto" : "See project"}
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
      <div className="foot">
        <p>{Parser(t("portfolio.integration"))}</p>
        <a
          href={t("portfolio.button.url")}
          className="button more"
          target="_blank"
          rel="noreferrer"
        >
          <hr /> {t("portfolio.button.name")}
        </a>
      </div>
    </section>
  )
}

export default Portfolio
