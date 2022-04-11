import React from "react"
import './headings.scss';

export default function Section({ header, description }) {
  return (
    <div className="Section">
      <h3 className="sectionHeader">{header}</h3>
      <p className="graphDescription">{description}</p>
    </div>
  )
}