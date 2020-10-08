import React from "react"
import Particles from "react-particles-js"
import styled from "styled-components"
import {
    motion,
    useViewportScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion"

//static files
import particlesJSON from "../../../assets/particles.json"

const Section2 = () => {
    const Section = styled.div`
        position: relative;
        padding: 30vh 19vw;
    `

    const Title = styled(motion.h1)`
        font-size: 24px;
        color: #fff;
        opacity: 0.4;
    `

    const Para = styled(motion.p)`
        color: #fff;
        opacity: 0.7;
    `

    return (
        <Section>
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
            <Title> Design, with purpose.</Title>
            <Para>
                Hi! I'm DeathSpace, a front-end web developer & UI/UX enthusiast
                from Bangalore, India. I specialize in creating websites for
                businesses that are tailored to their needs, with pixel-perfect
                code. Oh, and I have a serious passion for making neat
                animations. Please have a look around & play with the stars!
            </Para>
        </Section>
    )
}

export default Section2
