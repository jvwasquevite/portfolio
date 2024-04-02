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

  useEffect(() => {
    getPortfolio()
      .then(res => {
        setData(res)
      })
      .catch(err => console.error(err))
  }, [])

  console.log(data)

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
                    src={item.screenshots[0].downloadURL}
                    alt={item.name}
                    className="desktop"
                  />
                  <img
                    src={item.screenshots[1].downloadURL}
                    alt={item.name}
                    className="mobile"
                  />
                </div>
                <p className="sub-header">{item.language}</p>
                <h2>
                  {i18n.language === "pt"
                    ? item.name[0]
                    : item.name[1]
                    ? item.name[1]
                    : item.name[0]}
                </h2>
                <div className="skills">
                  {item.topics.map((topic, key) => (
                    <div className="skill" key={key}>
                      {topic}
                    </div>
                  ))}
                </div>
                <div className="secondary-text">
                  {i18n.language === "pt"
                    ? Parser(item.ptDescription)
                    : Parser(item.enDescription)}
                </div>
                {item.url ? (
                  <a
                    href={item.url}
                    className="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <hr />{" "}
                    {i18n.language === "pt" ? "Ver projeto" : "See project"}
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
        href={t("portfolio.button.url")}
        className="button more"
        target="_blank"
        rel="noreferrer"
      >
        <hr /> {t("portfolio.button.name")}
      </a>
    </section>
  )
}

export default Portfolio
