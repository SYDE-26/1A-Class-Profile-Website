import React from "react"

export default function CircleImage(props) {
    // falls back to the first letter of alt in case of error with loading image 
    return (
        <div className="circleImageRow">
            <Avatar alt={props.name} src={props.imagePath} className="aboutAvatar"/>
        </div>
    )
}
