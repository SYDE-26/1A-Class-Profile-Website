import React from "react"
import './headings.scss';

export default function GraphDescription(props) {
    return (
        <p className="graphDescription">{props.description}</p>
    )
}