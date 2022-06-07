import React, { useState, useEffect } from 'react'
import './style.css'

import Background from '../../Background'
import { getTinderUser } from '../services/requests'
import { Link } from 'react-router-dom'

import instagram from '../../../../assets/images/social-icons/instagram.svg'
import back from '../assets/back.png'
import Logo from '../Logo'
import Foot from '../../Foot'

const Profile = () => {
  const [user, setUser] = useState([])
  const [photo, setPhoto] = useState('')

  const logout = () => {
    localStorage.removeItem('user')
    window.location.href = '/doce22/tinder'
  }

  useEffect(() => {
    const getData = async () => {
      const userLocal = await localStorage.getItem('user')

      try {
        const { data: response } = await getTinderUser(userLocal)
        await setUser(response)
        await setPhoto(response[0].photos.value)
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [])

  return (
    <div className="Doce22 Profile">
      <Background />
      <div className="Tinder section full-screen">
        <div className="head">
          <div className="item">
            <Link to="/doce22/tinder/cards">
              <img src={back} alt="Cards" />
              <span>Prospectar</span>
            </Link>
          </div>
          <Logo />
          <div className="item" style={{ cursor: 'pointer' }} onClick={logout}>
            <span>Deslogar</span>
            <img
              src={back}
              style={{ transform: 'rotate(180deg)' }}
              alt="Deslogar"
            />
          </div>
        </div>
        <div>
          {user.map(user => (
            <div>
              <div className="cardContainer">
                <div
                  style={{
                    backgroundImage:
                      user.photos === undefined
                        ? 'url(https://i.imgur.com/u8p5O2O.jpg)'
                        : `url(${photo})`,
                  }}
                  className="card"
                >
                  <div className="content">
                    <h3>{user.firstname.value}</h3>
                    <p>{user.bio === undefined || user.bio.value}</p>
                    <div className="foot">
                      <div className="tags">
                        <div className="tag">
                          {user.status_de_relacionamento.value}
                        </div>
                        <div className="tag">
                          {user.orientacao_sexual.value}
                        </div>
                      </div>
                      <a
                        href={`https://www.instagram.com/${user.instagram.value}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="instagram">
                          <img src={instagram} alt="Instagram" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/doce22/tinder/profile/update">
                <button>Editar perfil</button>
              </Link>
            </div>
          ))}
        </div>
        <Foot />
      </div>
    </div>
  )
}

export default Profile
