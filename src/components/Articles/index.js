import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/requests'
import './style.css'

import { useTranslation } from 'react-i18next'
import Parser from 'html-react-parser'

const Articles = () => {
  const { t } = useTranslation()
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
        {data.map((post, key) => {
          return (
            <a href={post.link} key={key} target="_blank" rel="noreferrer">
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
      <div className="foot">
        <p>{Parser(t('articles.integration'))}</p>
        <a
          href={t('articles.button.url')}
          className="button more"
          target="_blank"
          rel="noreferrer"
        >
          <hr /> {t('articles.button.name')}
        </a>
      </div>
    </section>
  )
}

export default Articles
