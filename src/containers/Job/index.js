import React from "react"
import { useParams } from "react-router"
import "./style.css"

const Job = () => {
  const params = useParams()

  return (
    <main id="Job">
      <h1>Hello world</h1>
      <p>{params.company}</p>
      <p>{params.role}</p>
    </main>
  )
}

export default Job
