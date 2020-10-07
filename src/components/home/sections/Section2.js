import React from "react"
import Particles from "react-particles-js"
import styled from "styled-components"

//static files
import particlesJSON from "../../../assets/particles.json"

const Section2 = () => {
    return (
        <div>
            <Particles width="100%" height="100vh" params={particlesJSON} />
        </div>
    )
}

export default Section2
