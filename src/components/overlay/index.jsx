import React from 'react';
import '../overlay/overlay.scss';

export default function Overlay(props) {
    return ((props.showOverlay ?
        <div className="overlay">
            placeholder
        </div>
    : null))
}