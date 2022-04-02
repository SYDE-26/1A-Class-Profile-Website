import React from "react"
import './headings.scss';

export default function SectionHeader(props) {
    return (
        <h3 className="sectionHeader">{props.header}</h3>
    )
}