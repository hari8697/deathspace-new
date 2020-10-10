import React from "react"
import { motion, useTransform, AnimatePresence } from "framer-motion"
import { Section, Title, Para } from "../styled/textElements"

const Section3 = (props) => {
    return (
        <Section>
            <div>
                <Title>Work</Title>
                <Para>
                    Okay, enough chit-chat, where's the proof you ask? <br />
                    Here are some of my selected projects for your viewing
                    pleasure.
                </Para>
            </div>
        </Section>
    )
}

export default Section3
