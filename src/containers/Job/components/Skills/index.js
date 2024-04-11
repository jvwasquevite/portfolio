import React, { useEffect, useState } from "react"
import "./style.css"

const Skills = ({ props }) => {
  const [bar, setBar] = useState(false)

  useEffect(() => {
    setBar(true)
  }, [setBar])

  return (
    <div id="Skills">
      <div className="speech">
        <p>
          <b>Skills</b> que achei mais <b>pertinente</b>.
        </p>
      </div>
      {props.jobSkills.map((item, key) => {
        return (
          <div className="container" key={key}>
            <div className="content">
              <p className="sub-header">{item.area}</p>
              <h3>{item.stack}</h3>
              <p className="secondary-text">{item.description}</p>
            </div>
            <div
              className="bar"
              style={bar ? { width: `${item.level}` } : null}
            />
          </div>
        )
      })}
      <a
        href="https://www.linkedin.com/in/jvwasquevite/"
        className="button"
        target="_blank"
        rel="noreferrer"
      >
        <hr /> Mais no LinkedIn
      </a>
    </div>
  )
}

export default Skills
