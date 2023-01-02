import React, { useState, useEffect } from 'react'
import Background from '../Background'
import Head from '../Head'
import './style.css'
import { getTinderList } from '../Tinder/services/requests'

const Party = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: response } = await getTinderList()
        setData(response)
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [])

  return (
    <div className="Doce22 Party">
      <Background />
      <div className="section full-screen">
        <Head title="Doce 22" subtitle="Meus" />
      </div>
    </div>
  )
}

export default Party
