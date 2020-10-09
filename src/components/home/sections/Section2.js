import React, { useState, useEffect } from "react"
import Particles from "react-particles-js"
import styled from "styled-components"
import {
    motion,
    useViewportScroll,
    useMotionValue,
    useTransform,
    AnimatePresence,
} from "framer-motion"

//static files
import particlesJSON from "../../../assets/particles.json"

const Section2 = (props) => {
    const Section = styled(motion.div)`
        position: relative;
        padding: 30vh 21vw;
    `

    const Title = styled(motion.h1)`
        font-size: 1.728rem;
        line-height: 1.5rem;
        color: #fff;
        opacity: 0.4;
        width: auto;
    `

    const Para = styled(motion.p)`
        color: #fff;
        max-width: 80ch;
        opacity: 0.9;
        margin-top: 1rem;
    `

    const scrollDistance = [0.1, 0.2]
    const scrollDistanceNext = [0.15, 0.23]

    const progress = useTransform(props.scrollYProgress, scrollDistance, [
        0,
        100,
    ])
    const opacity = useTransform(props.scrollYProgress, scrollDistanceNext, [
        0,
        1,
    ])
    const y = useTransform(props.scrollYProgress, scrollDistance, [20, 0])

    const [state, setState] = useState(false)

    useEffect(() => {
        progress.onChange(() => {
            progress.get() >= 30 ? setState(true) : setState(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let variants = {
        hidden: {
            y: 20,
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: "easeIn",
            },
        },
        opacityHidden: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeIn",
            },
        },
        opacityVisible: {
            opacity: 1,
            transition: {
                delay: 0.6,
                duration: 0.9,
                ease: "easeOut",
            },
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.3,
            },
        },
        visible2: {
            y: 0,
            opacity: 0.4,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    let childVariants = {
        hidden: {
            y: 20,
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
        visible: {
            y: 0,
            opacity: 0.4,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }
    return (
        //  <Section>
        <div className="section__two">
            <Particles
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                width="100%"
                height="100vh"
                params={particlesJSON}
            />

            <AnimatePresence>
                {state && (
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="s2textContainer"
                    >
                        <Title
                            variants={variants}
                            // initial={"hidden"}
                            // animate={"visible"}
                            // exit={"hidden"}
                        >
                            Design,
                        </Title>

                        <Title
                            variants={childVariants}
                            // initial={"hidden"}
                            // animate={"visible2"}
                            // exit={"hidden"}
                        >
                            with purpose.
                        </Title>
                        <Para
                            variants={variants}
                            initial={"opacityHidden"}
                            animate={"opacityVisible"}
                        >
                            Hi! I'm DeathSpace, a front-end web developer &
                            UI/UX enthusiast from Bangalore, India. I specialize
                            in creating websites for businesses that are
                            tailored to their needs, with pixel-perfect code.
                            Oh, and I have a serious passion for making neat
                            animations. Please have a look around & don't forget
                            to play with the stars!
                        </Para>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        // </Section>
    )
}

export default Section2
