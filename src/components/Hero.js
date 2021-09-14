import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Typewriter from "typewriter-effect";
// ...GatsbyImageSharpFluid

const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

const Hero = () => {
  const {file:{childImageSharp:{ fluid }}} = useStaticQuery(query);

  return (
      <header className="hero">
          <div className="section-center hero-center">
              <article className="hero-info">
                  <div>
                      <div className="underline"></div>
                      <h1>Zunaid Amin Enan</h1>
                      <h2 className="typewriter-style"><Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("A Muslim")
                            .pauseFor(750)
                            .deleteAll()
                            .typeString("Full-Stack Developer")
                            .pauseFor(750)
                            .deleteAll()
                            .typeString("DevOps")
                            .pauseFor(750)
                            .deleteAll()
                            .typeString("Tech Enthusiast")
                            .pauseFor(750)
                            .deleteAll()
                            .typeString("Android Developer")
                            .start();       
                        }}
                      /></h2>
                      <h3>Freelance DevOps & Web Developer</h3>
                      <Link to='/contact' className="btn">
                          Get in touch
                      </Link>
                      <SocialLinks />
                  </div>
              </article>
              <Image fluid={fluid} className="hero-img" />
          </div>
      </header>
  )
}

export default Hero
