import React from "react"
import {
  FaFacebookMessenger,
  FaLinkedinIn,
  FaBehance,
  FaGithub,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookMessenger className="social-icon"></FaFacebookMessenger>,
    url: "https://www.facebook.com/zunaidamin.enan.10/",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/zunaid321",
  },
  {
    id: 2,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com/in/zunaidaminenan/",
  },
  
  // {
  //   id: 5,
  //   icon: <FaTwitter className="social-icon"></FaTwitter>,
  //   url: "https://www.twitter.com",
  // },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}