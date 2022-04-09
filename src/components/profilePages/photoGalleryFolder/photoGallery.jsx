import React from 'react';
import './photoGallery.scss';
import ProfileTitle from '../../headings/ProfileTitle';
import SliderSept from '../../carousel/carouselSlideSept';
import SliderOct from '../../carousel/carouselSlideOct';
import SliderNov from '../../carousel/carouselSlideNov';
import SliderDec from '../../carousel/carouselSlideDec';
import Footer from '../../footer/footer.jsx';
import { Link } from 'react-scroll';
import circle1 from '../../../images/circle1.svg';
import circle2 from '../../../images/circle4.svg';
import circle3 from '../../../images/circle3.svg';
import circle4 from '../../../images/circle2.svg';

function PhotoGallery() {
    return (
        <div>
            <ProfileTitle title="1A Photo Gallery" />
            <img src={circle1} className="circle1" alt="Circles"/>
            <div className="buttons">
                <Link activeClass="active" to="1" spy={true} smooth={true} className="textButton">Sept</Link>
                <Link to="2" spy={true} smooth={true} className="textButton">Oct</Link>
                <Link to="3" spy={true} smooth={true} className="textButton">Nov</Link>
                <Link to="4" spy={true} smooth={true} className="textButton">Dec</Link>
            </div>
            <br></br>
            <div className="timeline">
                <div className="container left" id="1">
                    <h3 className="headingRight">September 2021</h3>
                    <div className="content">
                        <SliderSept />
                    </div>
                </div>
                <div className="container right" id="2">
                    <img src={circle2} className="circle2" alt="Circles"/>
                    <h3 className="headingLeft">October 2021</h3>
                    <div className="content">
                        <SliderOct />
                    </div>
                </div>
                <div className="container left" id="3">
                    <img src={circle3} className="circle3" alt="Circles" />
                    <h3 className="headingRight">November 2021</h3>
                    <div className="content">
                        <SliderNov />
                    </div>
                </div>
                <div className="container right" id="4">
                    <img src={circle4} className="circle2" alt="Circles"/>
                    <h3 className="headingLeftDec">December 2021</h3>
                    <div className="content">
                        <SliderDec />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PhotoGallery;