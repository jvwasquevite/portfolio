import React, { useEffect, useState } from 'react'
import { getGuestList } from '../services/requests'
import Background from '../../Background'
import './style.css'

const Guests = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: response } = await getGuestList()
        setData(response)
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  })

  return (
    <div className="Guests">
      <Background />
      {data.map(user => (
        <div className="user">
          <p>{user.firstname.value}</p>
          <span>{user.status_de_relacionamento.value}</span>
          <span>{user.orientacao_sexual.value}</span>
        </div>
      ))}
    </div>
  )
}

export default Guests
