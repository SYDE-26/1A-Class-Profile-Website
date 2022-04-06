import React from 'react';
import { Link } from "react-router-dom";
import '../overlay/overlay.scss';
import closeIcon from '../../images/close-icon.svg';
import lockIcon from '../../images/lock-icon.svg';

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

                <Link to="/">
                    <button onClick={toggleOverlay} className="profile-button">
                        <h3 className="number-text">01</h3>
                        <h1 className="page-text">Profile</h1>
                    </button>
                </Link>

                <div className="profile-subsection">
                    <div className="profile-flexbox">
                        <Link to="/demographics">
                            <button onClick={toggleOverlay} className="demographics-button">
                                <h2 className="section-text">Demographics</h2>
                            </button>
                        </Link>

                        <Link to="/highschool">
                            <button onClick={toggleOverlay} className="hs-button">
                                <h2 className="section-text">High School</h2>
                            </button>
                        </Link>

                        <Link to="/academics">
                            <button onClick={toggleOverlay} className="academics-button">
                                <h2 className="section-text">Academics</h2>
                            </button>
                        </Link>

                        <Link to="/coop">
                            <button onClick={toggleOverlay} className="coop-button">
                                <h2 className="section-text">Coop</h2>
                            </button>
                        </Link>

                        <Link to="/lifestyles">
                            <button onClick={toggleOverlay} className="lifestyle-button">
                                <h2 className="section-text">Lifestyle</h2>
                            </button>
                        </Link>
                    </div>
                </div>

                <Link to="/about">
                    <button onClick={toggleOverlay} className="about-button">
                        <h3 className="number-text">02</h3>
                        <h1 className="page-text">About</h1>
                    </button>
                </Link>

                <Link to="/photoGallery">
                    <button onClick={toggleOverlay} className="photo-gallery-button">
                        <h3 className="number-text">03</h3>
                        <h1 className="page-text">Photo Gallery</h1>
                    </button>
                </Link>

                <Link to="/insyderPage">
                    <button onClick={toggleOverlay} className="meme-page-button">
                        <h3 className="number-text">04</h3>
                        <h1 className="page-text">Meme Page</h1>
                        <img
                            src={lockIcon}
                            alt="Lock Icon"
                            className="lock-icon"
                        />
                    </button>
                </Link>
            </div>
        </div>
    ) : null))
}
