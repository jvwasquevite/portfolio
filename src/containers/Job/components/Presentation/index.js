import React from "react"
import "./style.css"

import logo from "../../../../assets/images/logo.gif"

const Presentation = ({ props }) => {
  return (
    <div id="Presentation">
      <img src={logo} alt="logo" className="logo" />
      <p className="sub-header">Apresentação</p>
      <h1>
        Isso <b>não é</b> só mais um <b>currículo</b>.
      </h1>
      <p>
        <mark>Encontrar novos talentos</mark> pode ser <mark>exaustivo</mark>:
        dezenas de <mark>currículos</mark>, <mark>entrevistas</mark>, candidatos{" "}
        <mark>desqualificados</mark> e processos <mark>burocráticos</mark>.
      </p>
      <p>
        Por isso, decidi tentar algo <b className="different">diferente</b>.
      </p>
      <p>
        Estou à procura de uma <strong>nova oportunidade</strong>{" "}
        {props.multipleApplications ? "nas vagas" : "na vaga"}
        {window.matchMedia("(max-width:1150px)").matches
          ? " abaixo"
          : " ao lado"}{" "}
        e sei que sou o <mark>candidato ideal</mark> para a{" "}
        <strong>{props.company}</strong>.
      </p>
      <p>
        Peço apenas <mark>cinco minutos</mark> da sua atenção.
      </p>
    </div>
  )
}

export default Presentation
