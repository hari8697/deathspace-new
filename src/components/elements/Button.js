import React from "react"
import { Butt } from "../styled/Buttons"

const Button = (props) => {
    return (
        <Butt
            variants={props.variants}
            initial={props.initial && props.initial}
            animate={props.animate && props.animate}
            exit={props.exit && props.exit}
        >
            {props.children}
        </Butt>
    )
}

export default Button
