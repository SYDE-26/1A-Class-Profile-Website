import React from 'react';
import { Link } from "react-router-dom";
import '../insyderOverlay/insyderOverlay.scss';
import closeIcon from '../../images/close-icon.svg';
import lockIcon from '../../images/lock-icon.svg';

export default function InsyderOverlay(props) {
    function toggleOverlay() {
        props.setShowOverlay(prev => !prev)
    }

    function toggleInsyderOverlay() {
        props.setShowInsyderOverlay(prev => !prev)
    }

    return ((props.showInsyderOverlay ? (

        <div className="insyder-overlay">
            <button onClick={toggleInsyderOverlay} className="close-button">
                <img
                    src={closeIcon}
                    alt="Close Icon"
                    className="close-icon"
                />
            </button>
            <div className="insyder-overlay-content">
                <img
                    src={lockIcon}
                    alt="Lock Icon"
                    className="lock-icon"
                />
                <h3 className="main-text">Enter the password to access the Meme Page</h3>
                <p className="sub-text">Hint: Check the SYDE 2026 server for the password!</p>
                <input type="password" name="pass" id="password" />
            </div>
        </div>

    ) : null))
}