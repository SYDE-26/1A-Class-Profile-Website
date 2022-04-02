import React from 'react';
import '../navigation/navbar.scss';
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
