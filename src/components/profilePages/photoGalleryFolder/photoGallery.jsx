import React from 'react';
import './photoGallery.scss';
import ProfileTitle from '../../headings/ProfileTitle';
import SliderSept from '../../carousel/carouselSlideSept';
import SliderOct from '../../carousel/carouselSlideOct';
import SliderNov from '../../carousel/carouselSlideNov';
import SliderDec from '../../carousel/carouselSlideDec';
import Footer from '../../footer/footer.jsx';


function PhotoGallery() {
    return (
        <div>
            <ProfileTitle title="1A Photo Gallery" />
            <div className="timeline">
                <div className="container left">
                    <div className="content">
                        {/* <p>September 2021</p> */}
                        <SliderSept />
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        {/* <p>October 2021</p> */}
                        <SliderOct />
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        {/* <p>November 2021</p> */}
                        <SliderNov />
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        {/* <p>December 2021</p> */}
                        <SliderDec />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoGallery;