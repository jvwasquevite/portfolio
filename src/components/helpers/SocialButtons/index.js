import React from "react"
import "./style.css"

import facebook from "../../../assets/images/social-icons/facebook.svg"
import linkedin from "../../../assets/images/social-icons/linkedin.svg"
import behance from "../../../assets/images/social-icons/behance.svg"
import github from "../../../assets/images/social-icons/github.svg"
import whatsapp from "../../../assets/images/social-icons/whatsapp.svg"

const social = [
  {
    path: facebook,
    url: "https://www.facebook.com/jvwasquevite",
    color: "#3A5A99",
  },
  {
    path: linkedin,
    url: "https://www.linkedin.com/in/jvwasquevite/",
    color: "#0076B2",
  },
  {
    path: behance,
    url: "https://www.behance.net/jvwasquevite",
    color: "#1D6FED",
  },
  {
    path: github,
    url: "https://github.com/jvwasquevite/",
    color: "#3F91CB",
  },
  {
    path: whatsapp,
    url: "https://api.whatsapp.com/send?phone=5551995270276",
    color: "#25D366",
  },
]

const SocialButtons = () => {
  return (
    <div id="SocialButtons">
      {social.map((icon, key) => {
        return (
          <a
            href={icon.url}
            style={{ background: icon.color }}
            target="_blank"
            rel="noreferrer"
            key={key}
          >
            <img src={icon.path} alt={icon.path} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialButtons
