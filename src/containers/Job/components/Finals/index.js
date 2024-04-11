import React from "react"
import Parser from "html-react-parser"
import "./style.css"

const Finals = ({ props }) => {
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
    <div id="Finals">
      <p className="sub-header">Considerações finais</p>
      <h1>
        E aí<b>{props.name && " " + props.name}</b>, será que <b>deu match</b>?
      </h1>
      {Parser(props.finals)}
    </div>
  )
}

export default Finals
