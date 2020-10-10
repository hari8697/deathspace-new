import { motion } from "framer-motion"
import styled from "styled-components"
import { breakpoints } from "./utils"

export const Section = styled(motion.div)`
    position: relative;
    padding: 30vh 21vw;
`

export const Title = styled(motion.h1)`
    position: relative;
    /* font-size: 1.728rem; */
    /* line-height: 1.5rem; */
    color: #fff;
    opacity: 0.4;
    width: auto;

    ${breakpoints("font-size", "rem", [
        { 0: 1.72 },
        { 450: 2 },
        { 800: 2.4 },
        { 1200: 2.4 },
    ])};
    ${breakpoints("line-height", "rem", [
        { 0: 1.5 },
        { 450: 1.8 },
        { 800: 2.2 },
        { 1200: 2.2 },
    ])};
    /* ${breakpoints("display", "", [
        { 0: "block" },
        { 1200: "inline-block" },
    ])}; */
`

export const Para = styled(motion.p)`
    position: relative;
    color: #fff;
    max-width: 73ch;
    margin-top: 1rem;
`
