import React from 'react'
import Background from './Background'
import './style.css'

import logo from '../../assets/images/logo.svg'

import { CountDownDaily } from '@nilevia/count-down-timer-react'
import '@nilevia/count-down-timer-react/dist/index.css'

const Doce22 = () => {
  return (
    <>
      <Background />
      <div className="landing">
        <div className="head">
          <img src={logo} className="jvwasquevite" alt="Logo" />
          <div className="logo">
            <h3>Meus</h3>
            <div class="glitch-text">
              Doce 22
              <div class="glitch-text__clip">Doce 22</div>
            </div>
          </div>
        </div>

        <div className="content">
          <CountDownDaily
            className="countdown"
            endDate={'2022-05-10'}
            operator=":"
          />
          <h3 className="coming-soon">Coming Soon</h3>
        </div>

        <div className="foot">
          <div className="social">
            <p>more info on</p>
            <div className="icon">
              <a
                href="https://www.instagram.com/jvwasquevite/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-512.png"
                  alt="Instagram"
                />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://twitter.com/jvwasquevite/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-512.png"
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Doce22
