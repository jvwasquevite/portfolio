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

import Navbar from '../../components/Navbar'
import About from '../../components/About'

const Home = () => {
  return (
    <>
      <main id="Home">
        <aside>
          <Head />
        </aside>
        <main>
          <Hero />
          <About />
          <Resume />
          <Skills />
          <Portfolio />
          <Articles />
          <Contact />
          <Foot />
        </main>
      </main>
      <Navbar />
    </>
  )
}

export default Home
