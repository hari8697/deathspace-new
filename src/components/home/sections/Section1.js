import React, { useState, useEffect } from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

//Hooks
import useWindowSize from "../../../hooks/useWindowSize"

// import { window } from "browser-monads"

//static files
import "../../../styles/components/home/section1.scss"
import logo from "../../../images/Deathspace-logo-white.svg"
// import background from "../../../images/background.png"
import scrollArrow from "../../../images/scrollArrow.svg"
import video from "../../../images/video.mp4"

const Section1 = (props) => {
  const data = useStaticQuery(graphql`
    {
      allHeroImageJson {
        edges {
          node {
            id
            title
            image {
              childImageSharp {
                fluid(maxWidth: 5120) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  const heroImage = data.allHeroImageJson.edges
  const gatsbyImage = heroImage.map(({ node: image }) => {
    const id = image.id
    const title = image.title
    const imageData = image.image.childImageSharp.fluid

    return (
      <motion.div
        variants={props.variants}
        initial={"hidden"}
        animate={"visible"}
        className="bg"
        key={id}
      >
        <Img fluid={imageData} alt={title} />
      </motion.div>
    )
  })
  const windowSize = {
    width: useWindowSize().width,
    height: useWindowSize().height,
  }
  const { scrollYProgress } = useViewportScroll()
  const scrollDistance = [0, 0.1] // the amount to scroll to play the animations
  const halfScrollDistance = [0.065, 0.1] // the amount to scroll to play the animations
  const animValues = () => {
    if (windowSize.width > 768) {
      return {
        scroll: scrollDistance,
        up: ["calc(45vh + 20px)", "-0.5vh"],
        scale: [1, 0.4],
      }
    } else {
      return {
        scroll: scrollDistance,
        up: ["calc(40vh + 0px)", "calc(0vh + 8px)"],
        scale: [1, 0.5],
      }
    }
  }
  const y = useTransform(scrollYProgress, animValues().scroll, animValues().up)
  const progress = useTransform(scrollYProgress, scrollDistance, [0, 100])
  const opacity = useTransform(scrollYProgress, halfScrollDistance, [0, 1])
  const scale = useTransform(
    scrollYProgress,
    animValues().scroll,
    animValues().scale
  )

  let variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }
  const variants2 = {
    hidden: {
      scale: 1.2,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  }
  const arrowVars = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: [0, 1, 1, 0],
      y: [-10, 20, 40],
      transition: { loop: Infinity, duration: 2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  }

  const [state, setState] = useState(false)

  useEffect(() => {
    progress.onChange(() => {
      progress.get() >= 100 ? setState(true) : setState(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="section__one">
      {/* <AnimatePresence> */}
      {/* {state && ( */}
      <motion.div
        variants={variants2}
        initial={"hidden"}
        // animate={"visible"}
        // exit={"hidden"}
        style={{
          opacity,
        }}
        className="navbar"
      ></motion.div>
      {/* )} */}
      {/* </AnimatePresence> */}
      <div className="wrapper">
        {/* <motion.img
                    src={background}
                    alt=""
                    variants={variants}
                    initial={"hidden"}
                    animate={"visible"}
                    className="bg"
                /> */}
        {gatsbyImage}
        <video className="bg" autoPlay loop muted playsInline preload="none">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <motion.img
        src={logo}
        alt=""
        style={{
          scale,
          y,
        }}
        variants={variants}
        initial={"hidden"}
        animate={"visible"}
        className="deathspace_logo"
      />

      <AnimatePresence>
        {!state && (
          <motion.img
            src={scrollArrow}
            alt=""
            variants={arrowVars}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            className="scroll_arrow"
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Section1
