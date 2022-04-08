import Avatar from '@mui/material/Avatar';
import "./circleImage.scss";

export default function CircleImage(props) {
    // falls back to the first letter of alt in case of error with loading image 
    return (
        <div className="frame">
            <div className="wrapper">
                <a href={props.linkedin} target="_blank" title={`Check out ${props.name}'s LinkedIn!`}>
                    <Avatar
                        alt={props.name}
                        src={props.imagePath}
                        className="aboutAvatar"
                        sx={{ width: 86, height: 86}}
                    /> 
                </a>           
            </div>
        </div>
    )
}
