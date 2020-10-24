import { motion } from "framer-motion"
import styled from "styled-components"
import { breakpoints } from "./utils"

export const Butt = styled(motion.button)`
    position: relative;
    padding: 0.5rem 1.25rem;
    border: 1px solid #5e0ed8;
    background-color: transparent;
    border-radius: 4px;
    font-family: "Futura";
    color: #fff;
    font-size: 1rem;
    -webkit-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
    margin-top: 1rem;

    &:hover,
    &:focus {
        background-color: #5e0ed8;
        color: white;
        cursor: pointer;
    }
`
