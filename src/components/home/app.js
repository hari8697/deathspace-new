import React from "react"
import {
    motion,
    useViewportScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion"

//static files
import "../../styles/app.scss"

//components
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"

const App = () => {
    const { scrollYProgress } = useViewportScroll()

    return (
        <div className="App">
            <Section1></Section1>
            <Section2 scrollYProgress={scrollYProgress}></Section2>
        </div>
    )
}

export default App
