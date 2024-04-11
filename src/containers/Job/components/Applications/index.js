import React from "react"
import "./style.css"

const Applications = ({ props }) => {
  return (
    <section id="Applications">
      <div className="head">
        <img src={props.logo} alt="logo" />
        <div className="speech">
          <p>
            Meu perfil se encaixa <b>perfeitamente</b> nas vagas abaixo!
          </p>
        </div>
      </div>
      <div className="container">
        {props.applications.map((application, key) => {
          return (
            <div className="application" key={key}>
              <a href={application.url} target="_blank" rel="noreferrer">
                <div className="content">
                  <p className="sub-header">{application.type}</p>
                  <h3>{application.name}</h3>
                  <p className="secondary-text">
                    {application.area} · {application.role}
                  </p>
                  <div className="stack">
                    {application.stack.map((item, key) => (
                      <div className="item" key={key}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Applications
