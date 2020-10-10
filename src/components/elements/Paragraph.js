import React from "react"
import { Para } from "../styled/textElements"

const Paragraph = (props) => {
    return (
        <Para
            variants={props.variants}
            initial={props.initial && props.initial}
            animate={props.animate && props.animate}
            exit={props.exit && props.exit}
        >
            {props.value}
        </Para>
    )
}

export default Paragraph
