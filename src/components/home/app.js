import React from "react"
import {
    motion,
    useViewportScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion"
import Particles from "react-particles-js"

//static files
import "../../styles/app.scss"
import particlesJSON from "../../assets/particles.json"

//components
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"
import Section3 from "./sections/Section3"

const App = () => {
    const { scrollYProgress } = useViewportScroll()

    return (
        <div className="App">
            <Section1></Section1>
            <div className="particles__container">
                <Particles
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                    width="100%"
                    height="200vh"
                    params={particlesJSON}
                />
                <Section2 scrollYProgress={scrollYProgress}></Section2>
                <Section3 scrollYProgress={scrollYProgress}></Section3>
            </div>
        </div>
    )
}

export default App
