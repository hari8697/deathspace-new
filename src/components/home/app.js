import React from "react"
import { useViewportScroll } from "framer-motion"
import Particles from "react-particles-js"
// const Particles = lazy(() => import("react-particles-js"))

//static files
import "../../styles/app.scss"
import particlesJSON from "../../assets/particles.json"
import { variants, childVariants } from "../motion/variants"

//components
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"
import Section3 from "./sections/Section3"
import Section4 from "./sections/Section4"

// const renderLoader = () => <p>Loading</p>
// const Section2 = lazy(() => import("./sections/Section2"))
// const Section3 = lazy(() => import("./sections/Section3"))
// const Section4 = lazy(() => import("./sections/Section4"))
// const Section4 = lazy(() => import("./sections/Section4"))

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
                    variants={variants}
                />
                <Section2
                    scrollYProgress={scrollYProgress}
                    variants={variants}
                    childVariants={childVariants}
                ></Section2>

                <Suspense fallback={renderLoader()}>
                    <Section3
                        scrollYProgress={scrollYProgress}
                        variants={variants}
                        childVariants={childVariants}
                    ></Section3>
                </Suspense>
                <Suspense fallback={renderLoader()}>
                    <Section4
                        scrollYProgress={scrollYProgress}
                        variants={variants}
                        childVariants={childVariants}
                    ></Section4>
                </Suspense>
            </div>
        </div>
    )
}

export default App
