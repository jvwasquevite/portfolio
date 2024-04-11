import React from "react"
import "./style.css"

import picture from "../../assets/picture.jpg"
import behance from "../../../../assets/images/social-icons/behance.svg"

const AboutCards = ({ props }) => {
  return (
    <div id="AboutCards">
      <div className="speech">
        <p>
          Esse da <b>foto</b> sou eu!
        </p>
      </div>
      <div className="container primary">
        <div className="picture">
          <img src={picture} alt="João Wasquevite" />
        </div>
        <div className="card">
          <div className="content">
            <p className="sub-header">Formação acadêmica</p>
            <h2>Universidade Federal de Pelotas</h2>
            <h3>Graduação em Ciência da Computação</h3>
            <p className="secondary-text">
              Engenharia e Arquitetura de Software
            </p>
          </div>
        </div>
      </div>
      <div className="container secondary">
        <div className="card">
          <div className="content">
            <p className="sub-header">Área de atuação</p>
            <h2>Fullstack com foco em {props.jobFocus}</h2>
            <div className="stack">
              {props.jobStack.map((item, key) => (
                <div className="item" key={key}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <a href="https://be.net/jvwasquevite" target="_blank" rel="noreferrer">
          <div className="behance">
            <img src={behance} alt="Behance" />
          </div>
        </a>
      </div>
      <a
        href="https://be.net/jvwasquevite"
        className="button"
        target="_blank"
        rel="noreferrer"
      >
        <hr /> Acessar Behance
      </a>
    </div>
  )
}

export default AboutCards
