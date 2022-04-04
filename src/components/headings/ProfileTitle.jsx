import React from "react"
import './headings.scss';

export default function ProfileTitle(props) {
    return (
        <div>
            <h1 className={props.section}>{props.title}</h1>
        </div>
    )
}

// ensure the section props passed in are one of: demographics, lifestyle, coop, academics, admissions so 
// SCSS styles them appropriately 