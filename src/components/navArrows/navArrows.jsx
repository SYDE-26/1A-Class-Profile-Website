import Button from '@mui/material/Button';
import './navArrows.scss'
import { Link } from 'react-router-dom'

const NavArrows = ({ navBack, navForward }) => {
  let navBackID
  let navForwardID
  switch (navBack) {
    case "academics":
      navBackID = "Academics"
      break
    case "coop":
      navBackID = "Co-op"
      break
    case "lifestyles":
      navBackID = "Lifestyles"
      break
    case "demographics":
      navBackID = "Demographics"
      break
    case "highschool":
      navBackID = "High School"
      break
    default:
      navBackID = navBack
  }
  switch (navForward) {
    case "academics":
      navForwardID = "Academics"
      break
    case "coop":
      navForwardID = "Co-op"
      break
    case "lifestyles":
      navForwardID = "Lifestyles"
      break
    case "demographics":
      navForwardID = "Demographics"
      break
    case "highschool":
      navForwardID = "High School"
      break
    default:
      navForwardID = navForward
  }
  return (
    <div className="Footer">
      <div className="NavigationalButtons">
        <div className="Wrapper" id={navBack}>
          <Link to={`/${navBack}`}>
            <Button sx={{
              backgroundColor: "#27313B",
              color: "white",
              padding: "16px",
              borderRadius: "18px",
              textTransform: "none"
            }} variant="outline">&larr; {navBackID}</Button>
          </Link>
        </div>
        <div className="Wrapper" id={navForward}>
          <Link to={`/${navForward}`}>
            <Button sx={{
              backgroundColor: "#27313B",
              color: "white",
              padding: "16px",
              borderRadius: "18px",
              textTransform: "none"
            }} variant="outline">{navForwardID} &rarr;</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavArrows;