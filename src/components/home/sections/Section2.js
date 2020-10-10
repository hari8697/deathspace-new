import React, { useState, useEffect } from "react"
import { motion, useTransform, AnimatePresence } from "framer-motion"
import { Section, Title, Para } from "../styled/textElements"

const Section2 = (props) => {
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

        window.scrollY >= 350 && setState(true)
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
        <Section>
            {/* <div className=""> */}
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
            {/* </div> */}
        </Section>
    )
}

export default Section2
