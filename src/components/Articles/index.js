import React, { useEffect, useState } from "react"
import "./style.css"

import { getArticles } from "../../services/requests"
import { useTranslation } from "react-i18next"
import Parser from "html-react-parser"

const Articles = () => {
  const { t } = useTranslation()
  const [data, setData] = useState([])

  useEffect(() => {
    getArticles()
      .then(res => {
        setData(res.data.items)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <section id="Articles">
      <div className="container">
        {data.map((post, key) => {
          let thumbnail = post.description
            .toString()
            .match(/<img[^>]+src="([^">]+)"/)[1]

          return (
            <a href={post.link} key={key} target="_blank" rel="noreferrer">
              <div
                className="post"
                style={{
                  backgroundImage: `url(${thumbnail})`,
                }}
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
        <p>{Parser(t("articles.integration"))}</p>
        <a
          href={t("articles.button.url")}
          className="button more"
          target="_blank"
          rel="noreferrer"
        >
          <hr /> {t("articles.button.name")}
        </a>
      </div>
    </section>
  )
}

export default Articles
