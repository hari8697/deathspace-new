import React from "react";

//static files
import "../styles/app.scss";

//components
import ProcessIcons from "./elements/ProcessIcons";
import Section1 from "./sections/section1";

const App = () => {
    return (
        <div className="App">
            <Section1></Section1>
        </div>
    );
};

export default App;
