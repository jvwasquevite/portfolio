import React from "react"

const Background = ({ props }) => {
  return (
    <div id="Background">
      <p className="sub-header">Histórico profissional</p>
      <h1>
        Minhas <b>habilidades</b> e <b>experiências</b>.
      </h1>
      <p>
        Em <mark>2019</mark>, no <mark>primeiro semestre</mark>, ingressei na{" "}
        <a href="http://hut8.com.br" target="_blank" rel="noreferrer">
          empresa júnior da faculdade
        </a>{" "}
        como <mark>desenvolvedor {props.jobFocus}</mark> utilizando{" "}
        <mark>{props.jobStack.join(", ")}</mark> e outras{" "}
        <mark>tecnologias</mark>.
      </p>
      <p>
        No <mark>mesmo ano</mark> ocupei os <mark>cargos</mark> de{" "}
        <mark>Presidente</mark> e <mark>Diretor de Projetos</mark>, onde liderei
        mais de <mark>dez projetos</mark> e <mark>equipes</mark> ao longo de{" "}
        <mark>três anos</mark>.
      </p>
      <p>
        Desde então, entre <mark>estágios</mark>, <mark>projetos</mark> e{" "}
        <mark>empresas</mark> já trabalhei em diferentes <mark>cargos</mark> e{" "}
        <mark>tecnologias</mark>, focando os meus <mark>estudos</mark> na área{" "}
        de <mark>arquitetura</mark> e <mark>engenharia de software</mark>.
      </p>
    </div>
  )
}

export default Background
