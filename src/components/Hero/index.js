import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"
import "./style.css"

import happy from "../../assets/images/memojis/happy.webp"
import wink from "../../assets/images/memojis/wink.webp"
import tongue from "../../assets/images/memojis/tongue.webp"

import Arrow from "../../assets/images/arrow-down.svg"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [happy, wink, tongue]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prev => {
        return prev + 1 === slides.length ? 0 : prev + 1
      })
    }, 2000)
    return () => {
      clearInterval(intervalId)
    }
  }, [slides.length])

  return (
    <section id="Hero">
      <div className="content">
        <img src={slides[currentSlide]} className="memoji" alt="Memojis" />

        <Link
          to="Resume"
          spy={true}
          smooth={true}
          duration={1000}
          className="to-resume"
        >
          <img src={Arrow} className="arrow-down" alt="Go to resume" />
        </Link>

        <Link
          to="Next"
          spy={true}
          smooth={true}
          duration={1000}
          className="to-about"
        >
          <img src={Arrow} className="arrow-down" alt="Go to about" />
        </Link>
      </div>
    </section>
  )
}

export default Hero
