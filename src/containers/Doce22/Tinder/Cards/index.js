import React, { useState, useEffect, useContext, useMemo, useRef } from 'react'
import './style.css'

import TinderCard from 'react-tinder-card'
import {
  getTinderList,
  getTinderUser,
  sendTinderLike,
} from '../services/requests'
import { UserContext } from '../../../../routes'
import Background from '../../Background'

import instagram from '../../../../assets/images/social-icons/instagram.svg'
import back from '../assets/back.png'
// import like from '../assets/like.png'
// import unlike from '../assets/unlike.png'
// import undo from '../assets/undo.png'

import Logo from '../Logo'
import Foot from '../../Foot'
import { Link } from 'react-router-dom'

const Cards = () => {
  const { filter, setFilter } = useContext(UserContext)

  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [userPhoto, setUserPhoto] = useState('')

  useEffect(() => {
    /**
     * Get all tinder users with filters
     */
    const getData = async () => {
      try {
        const { data: response } = await getTinderList(filter)
        setData(response)
      } catch (err) {
        console.log(err)
      }
    }

    /**
     * Get logged user data from local storage
     */
    const getUserData = async () => {
      const userLocal = await localStorage.getItem('user')

      try {
        const { data: response } = await getTinderUser(userLocal)
        await setUserData(response)
        await setUserPhoto(response[0].photos.value)
      } catch (err) {
        console.log(err)
      }
    }

    getData()
    getUserData()

    /**
     * Clears filter query params after redirect
     */
    setFilter('')
  }, [])

  const [currentIndex, setCurrentIndex] = useState(data.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [popup, setPopup] = useState('none')

  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(data.length)
        .fill(0)
        .map(i => React.createRef()),
    []
  )

  const updateCurrentIndex = val => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  // const canGoBack = currentIndex < data.length - 1
  // const canSwipe = currentIndex >= 0

  const Popup = () => {
    return (
      <div className="Popup" style={{ display: popup }}>
        <button onClick={() => setPopup('none')}>Enviar curtida!</button>
        <button onClick={() => setPopup('none')}>Cancelar</button>
      </div>
    )
  }

  const sendLike = async (from, to) => {
    try {
      await sendTinderLike(from, to)
    } catch (err) {
      console.log(err)
    }
  }

  // set last direction and decrease current index
  const swiped = async (direction, name, email, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)

    const loggedUserEmail = await userData[0].email.value

    if (direction === 'right') {
      sendLike(loggedUserEmail, email)
    }
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  // const swipe = async dir => {
  //   if (canSwipe && currentIndex < data.length) {
  //     await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
  //   }
  // }

  // increase current index and show card
  // const goBack = async () => {
  //   if (!canGoBack) return
  //   const newIndex = currentIndex + 1
  //   updateCurrentIndex(newIndex)
  //   await childRefs[newIndex].current.restoreCard()
  // }

  return (
    <div className="Doce22 Card">
      <Background />
      <div className="Tinder section full-screen">
        <div className="head">
          <div className="item">
            <Link to="/doce22/tinder/filters">
              <img src={back} alt="Filtros" />
              <span>Filtrar</span>
            </Link>
          </div>
          <Logo />
          <div className="item" style={{ float: 'right' }}>
            <Link to="/doce22/tinder/profile">
              <span>Meu perfil</span>
              <img
                src={back}
                style={{ transform: 'rotate(180deg)' }}
                alt="Filtros"
              />
            </Link>
          </div>
        </div>

        <div>
          <div className="cardContainer">
            <div className="endCards">
              <div
                className="profile-pic center"
                style={{
                  backgroundImage: `url(${userPhoto})`,
                }}
              ></div>
              <div className="sonar-container">
                <div className="sonar center"></div>
                <div className="sonar center delay"></div>
              </div>
              <div className="container">
                <p>Não há mais ninguém aqui.</p>
                <Link to="/doce22/tinder/filters">Alterar filtros</Link>
                <Link to="/doce22/tinder/cards">Recomeçar</Link>
              </div>
            </div>
            {data.map((user, index) => (
              <>
                <Popup />
                <TinderCard
                  ref={childRefs[index]}
                  className="swipe"
                  key={user.firstname.value}
                  onSwipe={dir =>
                    swiped(dir, user.firstname.value, user.email.value, index)
                  }
                  onCardLeftScreen={() =>
                    outOfFrame(user.firstname.value, index)
                  }
                >
                  <div
                    style={{
                      backgroundImage:
                        user.photos === undefined
                          ? 'url(https://i.imgur.com/u8p5O2O.jpg)'
                          : `url(${user.photos.value})`,
                    }}
                    className="card"
                  >
                    <div className="content">
                      <h3>{user.firstname.value}</h3>
                      <p>{user.bio === undefined || user.bio.value}</p>
                      <a
                        href={`https://www.instagram.com/${user.instagram.value}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="instagram">
                          <img src={instagram} alt="Instagram" />
                          <span>{user.instagram.value}</span>
                        </span>
                      </a>
                      <div className="foot">
                        <div className="tags">
                          <div className="tag">
                            {user.status_de_relacionamento.value}
                          </div>
                          <div className="tag">
                            {user.orientacao_sexual.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TinderCard>
              </>
            ))}
          </div>
          {/* <div className="buttons">
            <button onClick={() => swipe('left')}>
              <img src={unlike} alt="Unlike" />
            </button>
            <button onClick={() => goBack()}>
              <img src={undo} alt="Undo" />
            </button>
            <button onClick={() => swipe('right')}>
              <img src={like} alt="Like" />
            </button>
          </div> */}
        </div>
        <Foot />
      </div>
    </div>
  )
}

export default Cards
