import React from 'react';
import './photoGallery.scss';
import ProfileTitle from '../../headings/ProfileTitle';
import SliderSept from '../../carousel/carouselSlideSept';
import SliderOct from '../../carousel/carouselSlideOct';
import SliderNov from '../../carousel/carouselSlideNov';
import SliderDec from '../../carousel/carouselSlideDec';
import Footer from '../../footer/footer.jsx';
import { Link } from 'react-scroll';


function PhotoGallery() {
    return (
        <div>
            <ProfileTitle title="1A Photo Gallery" />
            <div className="buttons">
                <Link activeClass="active" to="1" spy={true} smooth={true} className="textButton">Sept</Link>
                <Link to="2" spy={true} smooth={true} className="textButton">Oct</Link>
                <Link to="3" spy={true} smooth={true} className="textButton">Nov</Link>
                <Link to="4" spy={true} smooth={true} className="textButton">Dec</Link>
            </div>
            <div className="timeline">
                <div className="container left" id="1">
                    <h3 className="headingRight">September 2021</h3>
                    <div className="content">
                        <SliderSept />
                    </div>
                </div>
                <div className="container right" id="2">
                    <h3 className="headingLeft">October 2021</h3>
                    <div className="content">
                        <SliderOct/>
                    </div>
                </div>
                <div className="container left" id="3">
                    <h3 className="headingRight">November 2021</h3>
                    <div className="content">
                        <SliderNov/>
                    </div>
                </div>
                <div className="container right" id="4">
                    <h3 className="headingLeft">December 2021</h3>
                    <div className="content">
                        <SliderDec/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default PhotoGallery;