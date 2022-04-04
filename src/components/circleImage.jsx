import Avatar from '@mui/material/Avatar';
import "./circleImage.scss";

export default function CircleImage(props) {
    // falls back to the first letter of alt in case of error with loading image 
    return (
        <div className="wrapper">
            <Avatar
                alt={props.name}
                src={props.imagePath}
                className="aboutAvatar"
                sx={{ width: 90, height: 90 }}
            />            
        </div>
    )
}
