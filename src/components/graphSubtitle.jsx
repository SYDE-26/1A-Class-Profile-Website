import React from "react"

export default function GraphSubtitle(props) {
    return (
        <p className="graphQuestion">{props.question}</p>
    )
}

// if the sample size for the question is a seperate piece of data, add another prop for it 
// ex: {props.question} [n={props.sampleSize}]