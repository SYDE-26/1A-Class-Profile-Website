import React from 'react';
import '../overlay/overlay.scss';
import styled from 'styled-components';

export default function Overlay(props) {
    return ((props.showOverlay ?
        <div className="overlay">
            placeholder
        </div>
    : null))
}