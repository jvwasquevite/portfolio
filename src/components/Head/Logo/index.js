import React, { useState, useEffect } from 'react'
import './style.css'

import zero from '../../../assets/images/logo/0.webp'
import one from '../../../assets/images/logo/1.webp'
import two from '../../../assets/images/logo/2.webp'
import three from '../../../assets/images/logo/3.webp'
import four from '../../../assets/images/logo/4.webp'
import five from '../../../assets/images/logo/5.webp'
import six from '../../../assets/images/logo/6.webp'
import seven from '../../../assets/images/logo/7.webp'
import eight from '../../../assets/images/logo/8.webp'
import nine from '../../../assets/images/logo/9.webp'
import ten from '../../../assets/images/logo/10.webp'
import eleven from '../../../assets/images/logo/11.webp'
import twelve from '../../../assets/images/logo/12.webp'
import thirteen from '../../../assets/images/logo/13.webp'
import fourteen from '../../../assets/images/logo/14.webp'
import fifteen from '../../../assets/images/logo/15.webp'
import sixteen from '../../../assets/images/logo/16.webp'
import seventeen from '../../../assets/images/logo/17.webp'
import eighteen from '../../../assets/images/logo/18.webp'
import nineteen from '../../../assets/images/logo/19.webp'
import twenty from '../../../assets/images/logo/20.webp'
import twentyone from '../../../assets/images/logo/21.webp'
import twentytwo from '../../../assets/images/logo/22.webp'
import twentythree from '../../../assets/images/logo/23.webp'
import twentyfour from '../../../assets/images/logo/24.webp'
import twentyfive from '../../../assets/images/logo/25.webp'
import twentysix from '../../../assets/images/logo/26.webp'
import twentyseven from '../../../assets/images/logo/27.webp'
import twentyeight from '../../../assets/images/logo/28.webp'
import twentynine from '../../../assets/images/logo/29.webp'
import thirty from '../../../assets/images/logo/30.webp'
import thirtyone from '../../../assets/images/logo/31.webp'
import thirtytwo from '../../../assets/images/logo/32.webp'
import thirtythree from '../../../assets/images/logo/33.webp'
import thirtyfour from '../../../assets/images/logo/34.webp'
import thirtyfive from '../../../assets/images/logo/35.webp'
import thirtysix from '../../../assets/images/logo/36.webp'
import thirtyseven from '../../../assets/images/logo/37.webp'

const Logo = () => {
  const [currentFrame, setCurrentFrame] = useState(0)
  const frames = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyone,
    twentytwo,
    twentythree,
    twentyfour,
    twentyfive,
    twentysix,
    twentyseven,
    twentyeight,
    twentynine,
    thirty,
    thirtyone,
    thirtytwo,
    thirtythree,
    thirtyfour,
    thirtyfive,
    thirtysix,
    thirtyseven,
  ]

  useEffect(() => {
    setInterval(() => {
      setCurrentFrame(prev => {
        return prev + 1 === frames.length ? 37 : prev + 1
      })
    }, 80)
  }, [])

  return (
    <div id="Logo">
      <img src={frames[currentFrame]} alt="João Wasquevite" />
    </div>
  )
}

export default Logo
