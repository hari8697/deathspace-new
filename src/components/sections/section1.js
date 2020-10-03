import React, { useState, useEffect } from "react"
import {
    motion,
    useViewportScroll,
    useTransform,
    useCycle,
    AnimatePresence,
} from "framer-motion"
import { window } from "browser-monads"
import Particles from "react-particles-js"

//static files
import particlesJSON from "../../assets/particles.json"
import "../../styles/components/section1.scss"
import logo from "../../images/Deathspace-logo-white.svg"

const Section1 = () => {
    const { scrollYProgress } = useViewportScroll()
    const y = useTransform(
        scrollYProgress,
        [0, 0.1],
        ["calc(45vh - 45px)", "0vh"]
    )
    // const y = useTransform(
    //     scrollYProgress,
    //     [0, 0.1],
    //     ["calc(45vh - 45px)", "calc(0vh - 0px)"]
    // )
    const progress = useTransform(scrollYProgress, [0, 0.1], [0, 100])
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.4])
    const rotate = useTransform(scrollYProgress, [0, 0.1], [0, 180])

    let variants = {
        hidden: {
            // scale: 1.2,
            opacity: 0,
            transition: {
                duration: 1,
            },
        },
        visible: {
            // scale: 1,
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
    // const variants3 = {
    //     hidden: {
    //         opacity: 0,
    //     },
    //     visible: {
    //         opacity: 1,
    //     },
    // }

    const [state, setState] = useState(false)

    useEffect(() => {
        console.log(variants)

        progress.onChange(() => {
            progress.get() >= 100 ? setState(true) : setState(false)
        })
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="section__one">
            <AnimatePresence>
                {state && (
                    <motion.div
                        variants={variants2}
                        initial={"hidden"}
                        animate={state && "visible"}
                        exit={"hidden"}
                        className="navbar"
                    ></motion.div>
                )}
            </AnimatePresence>

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
            <Particles width="100%" height="200vh" params={particlesJSON} />
        </div>
    )
}

export default Section1
