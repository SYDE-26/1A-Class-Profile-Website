import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../insyderOverlay/insyderOverlay.scss';
import closeIcon from '../../images/close-icon.svg';
import lockIcon from '../../images/lock-icon.svg';
import { connectStorageEmulator } from 'firebase/storage';

export default function InsyderOverlay(props) {
    const [input, changeInput] = useState("");
    const navigate = useNavigate();

    function toggleOverlay() {
        props.setShowOverlay(prev => !prev)
    }

    function toggleInsyderOverlay() {
        props.setShowInsyderOverlay(prev => !prev)
    }

    function clickCloseButton() {
        toggleInsyderOverlay()
        toggleOverlay()
        navigate(-1)
    }

    function inputChange(userInput) {
        changeInput(userInput.target.value)

        if (userInput.target.value == "password") {
            toggleInsyderOverlay()
            changeInput("")
  
        }
    }

    return ((props.showInsyderOverlay ? (

        <div className="insyder-overlay">
            <button onClick={clickCloseButton} className="close-button">
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
                <h3 className="main-text">Enter the password to access the Insyder Page</h3>
                <p className="sub-text">Hint: Check the SYDE 2026 server for the password!</p>
                <input type="password" onChange={(userInput) => inputChange(userInput)} value={input} className="password-field"/>
            </div>
        </div>

    ) : null))
}