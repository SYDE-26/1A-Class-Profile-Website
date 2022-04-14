import Button from '@mui/material/Button';
import './footer.scss'
import logo from '../../images/heart.svg';
import arrow from '../../images/arrowUp.svg';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 20;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      // isVisible &&      // to limit setting state only the first time         
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <div>
      <div className="Footer">
        Created with <img src={logo} alt="love" className="heart" /> by SYDE 2026
        {isVisible && <div className="ScrollWrapper" id="ScrollToTop">
          <Button onClick={topFunction} sx={{
            backgroundColor: "#27313B",
            color: "white",
            borderRadius: "50px",
            padding: "16px"
          }} variant="outline"><img src={arrow} alt="up arrow"></img></Button>
        </div>}
      </div>
    </div>
  );
}

export default Footer;

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}