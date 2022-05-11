import React from 'react'
import './style.css'

const Foot = () => {
  return (
    <div className="Foot">
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
  )
}

export default Foot
