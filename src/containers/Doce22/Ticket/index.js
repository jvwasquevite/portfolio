import React, { useState } from 'react'
import './style.css'

const Ticket = () => {
  const [passcode, setPasscode] = useState('')
  const [invalid, setInvalid] = useState('none')

  const handleChange = event => {
    setPasscode(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (passcode === 'vip22' || passcode === 'Vip22' || passcode === 'VIP22') {
      window.location.href = '/doce22/checkout'
    } else {
      setInvalid('block')
    }
  }

  return (
    <>
      <div className="Ticket">
        <div className="ticket-head">
          <h3 className="sub-title">VIP Passcode</h3>
          <span>Restrito para amigos e conhecidos</span>
        </div>
        <img
          src="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/1/a/4/6/1112801626689375.jpg"
          alt="Doce22"
        />
        <div className="ticket-content">
          <div className="barcode"></div>
          <p className="description">
            <span>#MeusDoce22</span>
            10.JUNHO.2022
          </p>
        </div>
        <div className="rip"></div>
        <div className="invalid-passcode" style={{ display: invalid }}>
          <span>Código inválido, tente novamente.</span>
        </div>
        <div className="ticket-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={passcode}
              placeholder="Insira o código aqui"
              onChange={handleChange}
            />
            <input type="submit" value="Validar" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Ticket
