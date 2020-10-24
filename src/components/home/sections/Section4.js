import React, { useState, useEffect } from "react"
import { motion, useTransform, AnimatePresence } from "framer-motion"
import { Section } from "../../styled/textElements"
import Title from "../../elements/Title"
import ProcessIcons from "../../elements/ProcessIcons"

const Section4 = (props) => {
    const scrollDistance = [0.5, 0.6]
    const progress = useTransform(props.scrollYProgress, scrollDistance, [
        0,
        100,
    ])
    const [state, setState] = useState(false)
    useEffect(() => {
        progress.onChange(() => {
            progress.get() >= 30 ? setState(true) : setState(false)
        })

        window.scrollY >= 2600 && setState(true)
        console.log(window.scrollY)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Section className="">
            <AnimatePresence>
                {state && (
                    <motion.div
                        variants={props.variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className=""
                    >
                        <Title variants={props.childVariants}>Process</Title>
                        <ProcessIcons />
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    )
}

export default Section4
