import React from "react"
import { TitleEl } from "../styled/textElements"

const Title = (props) => {
    return (
        <TitleEl
            variants={props.variants}
            initial={props.initial && props.initial}
            animate={props.animate && props.animate}
            exit={props.exit && props.exit}
        >
            {props.value}
        </TitleEl>
    )
}

export default Title
