import React from 'react'
import './style.css'

import Head from '../../components/Head'
import Hero from '../../components/Hero'
import Resume from '../../components/Resume'
import Skills from '../../components/Skills'
import Portfolio from '../../components/Portfolio'
import Articles from '../../components/Articles'
import Contact from '../../components/Contact'
import Foot from '../../components/Foot'

const Home = () => {
  return (
    <main id="Home">
      <aside>
        <Head />
      </aside>
      <main>
        <Hero />
        <Resume />
        <Skills />
        <Portfolio />
        <Articles />
        <Contact />
        <Foot />
      </main>
    </main>
  )
}

export default Home
