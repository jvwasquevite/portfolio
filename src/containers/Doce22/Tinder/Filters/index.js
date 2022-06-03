import React, { useState, useContext } from 'react'
import './style.css'

import { UserContext } from '../../../../routes'
import Background from '../../Background'
import { Link } from 'react-router-dom'

import back from '../assets/back.png'
import Logo from '../Logo'
import Foot from '../../Foot'

const Filters = () => {
  const { setFilter } = useContext(UserContext)
  const [filters, setFilters] = useState({})
  const [invalid, setInvalid] = useState('none')

  const logout = () => {
    localStorage.removeItem('user')
    window.location.href = '/doce22/tinder'
  }

  const handleChange = event => {
    setFilters(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const query = `?gender=${filters.gender}&status=${filters.status}&orientation=${filters.orientation}`

    if (
      filters.gender === undefined ||
      filters.status === undefined ||
      filters.orientation === undefined
    ) {
      setInvalid('block')
    } else {
      setFilter(query)
    }
  }
  return (
    <div className="Doce22 Filters">
      <Background />
      <div className="Tinder section full-screen">
        <div className="head">
          <div className="item" style={{ cursor: 'pointer' }} onClick={logout}>
            <img src={back} alt="Deslogar" />
            <span>Deslogar</span>
          </div>
          <Logo />
          <div className="item">
            <Link to="/doce22/tinder/cards">
              <span>Prospectar</span>
              <img
                src={back}
                style={{ transform: 'rotate(180deg)' }}
                alt="Prospectar"
              />
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <select name="gender" onChange={handleChange}>
              <option value="default" hidden>
                Gênero
              </option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Outro">Outro</option>
            </select>
            <select name="status" onChange={handleChange}>
              <option value="default" hidden>
                Status de relacionamento
              </option>
              <option value="Solteiro/a">Solteiro/a</option>
              <option value="Enrolado/a">Enrolado/a</option>
              <option value="Em um relacionamento aberto">
                Em um relacionamento aberto
              </option>
              <option value="Em um relacionamento fechado">
                Em um relacionamento fechado
              </option>
            </select>
            <select name="orientation" onChange={handleChange}>
              <option value="default" hidden>
                Orientação sexual
              </option>
              <option value="Gay">Gay</option>
              <option value="Bi/Bi de Festa">Bi/Bi de Festa</option>
              <option value="Hétero">Hétero</option>
              <option value="Outro">Outro</option>
            </select>
            <input type="submit" value="Filtrar usuários" />
          </form>
          <div className="invalid" style={{ display: invalid }}>
            <span>Selecione todos os campos acima.</span>
          </div>
        </div>
        <Foot />
      </div>
    </div>
  )
}

export default Filters
