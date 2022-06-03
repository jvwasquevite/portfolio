import React, { useState, useContext } from 'react'
import './style.css'

import { getTinderUser } from './services/requests'
import { UserContext } from '../../../routes'

import Background from '../Background'
import Foot from '../Foot'
import Logo from './Logo'

const Tinder = () => {
  const { setUser, setIsAuth } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalid, setInvalid] = useState('none')

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const fetchData = async () => {
      try {
        const { data: response } = await getTinderUser(email)

        if (response[0].jobtitle.value === password) {
          setUser(email)
          setIsAuth(true)
          localStorage.setItem('user', `${email}`)
          window.location.href = '/doce22/tinder/cards'
        } else {
          setInvalid('block')
        }
      } catch (err) {
        console.log(err)
        setInvalid('block')
      }
    }

    fetchData()
  }

  return (
    <div className="Doce22">
      <Background />
      <div className="Tinder section full-screen">
        <Logo />
        <div>
          <button
            onClick={() => (window.location.href = '/doce22/tinder/signup')}
          >
            Meu primeiro acesso
          </button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              placeholder="Seu e-mail"
              onChange={handleEmail}
              autoComplete="new-password"
            />
            <div className="flex">
              <input
                type="password"
                value={password}
                placeholder="Sua senha"
                onChange={handlePassword}
                autoComplete="new-password"
              />
              <input type="submit" value="Login" />
            </div>
          </form>
          <div className="invalid" style={{ display: invalid }}>
            <span>E-mail ou senha não encontrado.</span>
          </div>
        </div>
        <Foot />
      </div>
    </div>
  )
}

export default Tinder
