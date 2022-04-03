import React from 'react';
import '../overlay/overlay.scss';
import closeIcon from '../../images/close-icon.svg';

export default function Overlay(props) {
    function toggleOverlay() {
        props.setShowOverlay(prev => !prev)
    }

    return ((props.showOverlay ? (
        <div className="overlay">
            <div className="overlay-content">
                <div className="close-section">
                    <button onClick={toggleOverlay} className="close-button">
                        <img
                            src={closeIcon}
                            alt="Close Icon"
                            className="close-icon"
                        />
                    </button>
                </div>
                <button className="profile-button">

                </button>
                <div className="profile-subsection">
                    <button className="profile-demographics-button"></button>
                    <button className="profile-hs-button"></button>
                    <button className="profile-academics-button"></button>
                    <button className="profile-coop-button"></button>
                    <button className="profile-lifestyle-button"></button>
                </div>
                <button className="about-button">

                </button>
                <button className="photo-gallery-button">

                </button>
                <button className="meme-page-button">

                </button>
            </div>
        </div>
    ) : null))
}
