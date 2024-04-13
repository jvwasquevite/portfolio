import React from "react"

const About = ({ props }) => {
  let name = ""

  if (props.name) {
    name = props.name.toLowerCase().split(" ")
    props.name = name
      .map(token => {
        return token[0].toUpperCase() + token.substring(1)
      })
      .join(" ")
  }

  return (
    <div id="AboutMe">
      <p className="sub-header">Sobre mim</p>
      <h1>
        Prazer, <strong>{props.name && props.name}</strong>
        {props.name && "."}
      </h1>
      <h2>
        Meu nome é <b>João Wasquevite</b>.
      </h2>
      <p>
        Pode me chamar apenas de <mark>João</mark>.
      </p>
      <p>
        <mark>Cientista da Computação</mark> pela{" "}
        <mark>Universidade Federal de Pelotas</mark>, sou{" "}
        <mark>desenvolvedor fullstack</mark> com foco em{" "}
        <mark>{props.jobFocus}</mark>.
      </p>
      <p>
        Sempre fui <mark>apaixonado</mark> por <mark>tecnologia</mark>: aprendi{" "}
        <mark>programação</mark> sozinho e com <mark>doze anos</mark> me tornei{" "}
        <a href="https://be.net/jvwasquevite" target="_blank" rel="noreferrer">
          programador freelancer
        </a>
        .
      </p>
      <p>
        Atualmente, após anos de <mark>experiência</mark>, busco{" "}
        <mark>novos desafios</mark> e vejo na <strong>{props.company}</strong>{" "}
        uma <mark>oportunidade</mark> incrível de <mark>crescimento</mark>,
        alinhado aos meus <mark>valores</mark> e <mark>perfil técnico</mark>.
      </p>
    </div>
  )
}

export default About
