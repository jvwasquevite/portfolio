import React from "react"
import "./style.css"

const Navigator = ({ props }) => {
  return (
    <div id="Navigator" className={props.currentIndex === 0 && "presentation"}>
      {props.currentIndex === 0 ? (
        <input
          type="text"
          value={props.name}
          onChange={e => props.setName(e.target.value)}
          onKeyDown={e => {
            e.key === "Enter" && props.handleNextClick()
          }}
          placeholder="Como posso te chamar?"
        />
      ) : (
        <button className="btn-secondary" onClick={props.handlePrevClick}>
          Voltar
        </button>
      )}
      {props.currentIndex === props.length - 1 ? (
        <a href="https://wa.me/5551995270276" target="_blank" rel="noreferrer">
          <button className="btn-primary">Entrar em contato</button>
        </a>
      ) : (
        <button className="btn-primary" onClick={props.handleNextClick}>
          Continuar
        </button>
      )}
    </div>
  )
}

export default Navigator
