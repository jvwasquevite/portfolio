import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/requests'
import './style.css'

const Articles = () => {
  const [data, getData] = useState([])

  useEffect(() => {
    getPosts()
      .then(res => {
        getData(res.data.items)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <section id="Articles">
      <div className="container">
        {data.map(post => {
          return (
            <a href={post.link} target="_blank" rel="noreferrer">
              <div
                className="post"
                style={{ backgroundImage: `url(${post.thumbnail})` }}
              >
                <div className="content">
                  <p className="sub-header">Medium</p>
                  <h3>{post.title}</h3>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Articles
