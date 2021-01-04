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

import About from '../../components/About'
import Navbar from '../../components/Navbar'

import { MenuContextProvider } from '../../services/contexts/MenuContext'

const Home = () => {
  return (
    <MenuContextProvider>
      <main id="Home">
        <aside>
          <Head />
        </aside>
        <main>
          <Hero />
          <div id="Next">
            <About />
          </div>
          <Resume />
          <Skills />
          <Portfolio />
          <Articles />
          <Contact />
          <Foot />
        </main>
      </main>
      <Navbar />
    </MenuContextProvider>
  )
}

export default Home
