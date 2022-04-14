import Button from '@mui/material/Button';
import './footer.scss'
import logo from '../../images/heart.svg';
import { useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <div className="Footer">
        Created with <img src={logo} alt="love" className="heart" /> by SYDE 2026
        <div className="Wrapper" id="ScrollToTop">
          {isVisible && <Button onClick={topFunction} sx={{
            backgroundColor: "#27313B",
            color: "white",
            borderRadius: "18px"
          }} variant="outline">&uarr;</Button>}
        </div>
      </div>
    </div>
  );
}

export default Footer;

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}