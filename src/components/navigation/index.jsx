<<<<<<< HEAD
import React, {useState} from 'react';
import '../navigation/navbar.scss';
import Overlay from '../overlay';
import logo from '../../images/navbar-logo.png';
import menuItem from '../../images/navbar-menu-item.svg';

export default function Navbar() {
    return (
      <header className="navbar">

        <img 
          src={logo}
          alt="Navbar Logo"
          className="navbar-logo"
        />

        <button
          className="menu-button"

        ><img 
          src={menuItem}
          alt="Menu Vector"
          className="menu-image"

        /></button>

      </header>
    );
};
=======
import React from 'react';
import '../navigation/navigation.scss';

const GradientBackground = () => {

    const Pages = [
        {text: 'Co-op', link: '/coop'},
        {text: 'Academics', link: '/academics'},
        {text: 'Demographics', link: '/demographics'},
        {text: 'High School', link: '/highschool'},
        {text: 'Lifestyle', link: '/lifestyle'}
    ]

    const GradientSelection = ['CoopGradient', 'AcademicsGradient', 'DemographicsGradient', 'HighSchoolGradient', 'LifeStyleGradient']

    return (
        <div className='Wrapper'>
            {Pages.map((page, index) => (
                <div className='CircleWrapper'>
                    <div className={GradientSelection[index]}>
                        <div className='BlackCircle'>
                            <p className='Text' onClick=''>{page.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GradientBackground
>>>>>>> 4a220a91bf16e9f3bd60ec1c47d97ad7c0b0481e
