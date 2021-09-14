import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
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
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
            </div>
        </article>
        <StaticImage
          src="../assets/hero.webp"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero