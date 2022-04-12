import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../navbar/navbar.scss';
import Overlay from '../overlay';
import logo from '../../images/menu-logo.svg';
import menuItem from '../../images/menu-icon.svg';

export default function Navbar(props) {

    function toggleOverlay() {
        props.setShowOverlay(prev => !prev)
    }

    return (
        <header className="navbar">
            <Link to="/">
                <button
                    className="logo-button"
                ><img
                        src={logo}
                        alt="Navbar Logo"
                        className="navbar-logo"
                    /></button>
            </Link>

            <button
                className="menu-button"
                onClick={toggleOverlay}
            ><img
                    src={menuItem}
                    alt="Menu Vector"
                    className="menu-image"
                /></button>
        </header>
    );
};
