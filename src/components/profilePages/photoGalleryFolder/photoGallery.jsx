import React from 'react';
import './photoGallery.scss';
import Slider from '../../carousel/carouselSlide';

function PhotoGallery() {
    return (
        <div className="timeline">
            <div className="container left">
                <div className="content">
                    <Slider/>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <Slider/>
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <Slider/>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <Slider/>
                </div>
            </div>
        </div>
    );
}

export default PhotoGallery;