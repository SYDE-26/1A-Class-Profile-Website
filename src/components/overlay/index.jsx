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
                <button onClick={toggleOverlay} className="close-button">
                    <img
                        src={closeIcon}
                        alt="Close Icon"
                        className="close-icon"
                    />
                </button>
                <button>

                </button>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <button>

                </button>
                <button>

                </button>
                <button>

                </button>
                <button>

                </button>
            </div>
        </div>
    ) : null))
}
