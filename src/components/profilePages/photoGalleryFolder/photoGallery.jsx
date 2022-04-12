import React from 'react';
import './photoGallery.scss';
import ProfileTitle from '../../headings/ProfileTitle';
import SliderSept from '../../carousel/carouselSlideSept';
import SliderOct from '../../carousel/carouselSlideOct';
import SliderNov from '../../carousel/carouselSlideNov';
import SliderDec from '../../carousel/carouselSlideDec';
import Footer from '../../footer/footer.jsx';
import { Link } from 'react-scroll';
import circleOne from '../../../images/circle1.svg';
import circleTwo from '../../../images/circle4.svg';
import circleThree from '../../../images/circle3.svg';
import circleFour from '../../../images/circle2.svg';

function PhotoGallery() {
    return (
        <div>
            <ProfileTitle title="1A Photo Gallery" />
            <img src={circleOne} className="circleOne" alt="Circles"/>
            <div className="buttons">
                <Link activeClass="active" to="1" spy={true} smooth={true} className="textButton">Sept</Link>
                <Link to="2" spy={true} smooth={true} className="textButton">Oct</Link>
                <Link to="3" spy={true} smooth={true} className="textButton">Nov</Link>
                <Link to="4" spy={true} smooth={true} className="textButton">Dec</Link>
            </div>
            <br></br>
            <div className="timeline">
                <div className="container leftGallery" id="1">
                    <h3 className="headingRight">September 2021</h3>
                    <div className="content">
                        <SliderSept />
                    </div>
                </div>
                <div className="container rightGallery" id="2">
                    <img src={circleTwo} className="circleTwo" alt="Circles"/>
                    <h3 className="headingLeft">October 2021</h3>
                    <div className="content">
                        <SliderOct />
                    </div>
                </div>
                <div className="container leftGallery" id="3">
                    <img src={circleThree} className="circleThree" alt="Circles" />
                    <h3 className="headingRight">November 2021</h3>
                    <div className="content">
                        <SliderNov />
                    </div>
                </div>
                <div className="container rightGallery" id="4">
                    <img src={circleFour} className="circleTwo" alt="Circles"/>
                    <h3 className="headingLeftDec">December 2021</h3>
                    <div className="content">
                        <SliderDec />
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
}

export default PhotoGallery;