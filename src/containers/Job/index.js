import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import "./style.css"

import Presentation from "./components/Presentation"
import Applications from "./components/Applications"
import { getJob } from "../../services/requests"

import Navigator from "./components/utils/Navigator"
import About from "./components/About"

import Projects from "../../components/Projects"
import Background from "./components/Background"
import AboutCards from "./components/AboutCards"
import Skills from "./components/Skills"
import Repositories from "./components/Repositories"
import Contact from "../../components/Contact"
import Finals from "./components/Finals"

const Job = () => {
  const params = useParams()
  const company = params.company

  const [data, setData] = useState([])
  const [applications, setApplications] = useState([])

  useEffect(() => {
    getJob(company)
      .then(res => {
        setData(res)
        setApplications(res.applications)
      })
      .catch(err => {
        console.error(err)
        window.location.replace("/")
      })
  }, [company])

  const [name, setName] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const pages = [
    {
      aside: (
        <Presentation
          props={{
            company: data.companyName,
            multipleApplications: data.multipleApplications,
          }}
        />
      ),
      main: <Applications props={{ logo: data.logo, applications }} />,
    },
    {
      aside: (
        <About
          props={{ name, jobFocus: data.jobFocus, company: data.companyName }}
        />
      ),
      main: (
        <AboutCards
          props={{ jobFocus: data.jobFocus, jobStack: data.jobStack }}
        />
      ),
    },
    {
      aside: (
        <Background
          props={{ jobFocus: data.jobFocus, jobStack: data.jobStack }}
        />
      ),
      main: <Skills props={{ jobSkills: data.jobSkills }} />,
    },
    {
      aside: <Repositories />,
      main: <Projects />,
    },
    {
      aside: <Finals props={{ name, finals: data.finals }} />,
      main: <Contact />,
    },
  ]

  const handleNextClick = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <main id="Job">
      <aside>
        {pages[currentIndex].aside}
        <Navigator
          props={{
            handlePrevClick,
            handleNextClick,
            name,
            setName,
            currentIndex,
            setCurrentIndex,
            length: pages.length,
          }}
        />
      </aside>
      <main>{pages[currentIndex].main}</main>
    </main>
  )
}

export default Job
