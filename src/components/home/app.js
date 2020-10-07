import React from "react"

//static files
import "../../styles/app.scss"

//components
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"

const App = () => {
    return (
        <div className="App">
            <Section1></Section1>
            <Section2></Section2>
        </div>
    )
}

export default App
