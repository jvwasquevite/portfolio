import React, { useEffect, useState } from "react"
import "./style.css"

import { getProjects } from "../../services/requests"
import { useTranslation } from "react-i18next"
import Parser from "html-react-parser"

const Projects = () => {
  const { t } = useTranslation()
  const [data, setData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 4

  useEffect(() => {
    getProjects()
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(data.length / projectsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <section id="Projects">
      <div className="container">
        {currentProjects.map((project, key) => {
          return (
            <div key={key} className="project">
              <a href={project.html_url} target="_blank" rel="noreferrer">
                <div className="content">
                  <p className="sub-header">{project.language}</p>
                  <h3>/{project.name}</h3>
                  <p className="secondary-text">{project.description}</p>
                  <div className="topics">
                    {project.topics.map((topic, key) => (
                      <div className="topic" key={key}>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
      <div className="pagination">
        <ul>
          {pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                className={currentPage === number ? "active" : ""}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="foot">
        <p>{Parser(t("projects.integration"))}</p>
        <a
          href={t("projects.button.url")}
          className="button more"
          target="_blank"
          rel="noreferrer"
        >
          <hr /> {t("projects.button.name")}
        </a>
      </div>
    </section>
  )
}

export default Projects
