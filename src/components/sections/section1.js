import React, { useState, useEffect } from "react"
import {
    motion,
    useViewportScroll,
    useTransform,
    useCycle,
} from "framer-motion"
import { window } from "browser-monads"

//static files
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
    const top = useTransform(scrollYProgress, [0, 0.1], [50, 1])
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.4])
    const rotate = useTransform(scrollYProgress, [0, 0.1], [0, 180])

    const variants = {
        hidden: {
            scale: 1.2,
            opacity: 0,
            transition: {
                duration: 1,
            },
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    }

    const [state, setState] = useState(false)

    useEffect(() => {
        y.onChange(() => {
            y.get() > -100 ? setState(false) : setState(true)
        })
    }, [])

    return (
        <div className="section__one">
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
        </div>
    )
}

export default Section1
