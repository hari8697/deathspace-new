import React, { useState, useEffect } from "react"
import { motion, useTransform, AnimatePresence } from "framer-motion"
import { Section } from "../styled/textElements"
import Title from "../../elements/Title"
import Paragraph from "../../elements/Paragraph"

const Section2 = (props) => {
    const scrollDistance = [0.1, 0.2]
    const progress = useTransform(props.scrollYProgress, scrollDistance, [
        0,
        100,
    ])
    const [state, setState] = useState(false)
    useEffect(() => {
        progress.onChange(() => {
            progress.get() >= 30 ? setState(true) : setState(false)
        })

        window.scrollY >= 350 && setState(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Section className="particle__section">
            {/* <div className=""> */}
            <AnimatePresence>
                {state && (
                    <motion.div
                        variants={props.variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="s2textContainer"
                    >
                        <Title
                            variants={props.variants}
                            value="Design,"
                        ></Title>
                        <Title
                            variants={props.childVariants}
                            value="with purpose."
                        ></Title>
                        <Paragraph
                            variants={props.variants}
                            initial="opacityHidden"
                            animate="opacityVisible"
                            value="Hi! I'm DeathSpace, a front-end web developer &
                            UI/UX enthusiast from Bangalore, India. I specialize
                            in creating websites for businesses that are
                            tailored to their needs, with pixel-perfect code.
                            Oh, and I have a serious passion for making neat
                            animations. Please have a look around & don't forget
                            to play with the stars!"
                        ></Paragraph>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* </div> */}
        </Section>
    )
}

export default Section2
