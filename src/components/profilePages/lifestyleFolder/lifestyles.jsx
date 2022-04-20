import React from 'react';
import useDocumentTitle from '../../../useDocumentTitle'
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'
import Chart from '../../charts/chart';
import Section from '../../headings/section';
import logo from '../../../images/Goose word cloud.svg'
import '../img.scss'

function Lifestyles() {

    useDocumentTitle('SYDE \'26 | Lifestyle');

    return (
        <div>
            <ProfileTitle section="lifestyle" title="Lifestyle" />
            <Section header="Mental Health and Time Outdoors" description="1A hit us like a truck, but going outside to touch some grass positively impacted our mental health." />
            {/* The data here might say PercentageOfHighschoolFriends but it's really stress level of 1A            */}
            <Chart type="Bar" data="PercentageOfHighschoolFriends" position="left" />
            <Chart type="Box" data="StressLevelVSOutside" position="right" />
            <Section header="Social and Physical Life" description="We pack both brains and brawn. We’re known to be a social program for a reason, SYDE is one big happy family." />
            <Chart type="Pie" data="socialBubble" position="left" />
            <Chart type="Multi" data="FriendsHighschool" position="right" />
            <Section header="Before Coming to Waterloo/1A Have You..." description="Singlehandedly destroying engineering stereotypes 😍" />
            <Chart type="Multi" data="Before 1A" position="center" />
            <Chart type="Multi" data="During 1A" position="center" />
            <Section header="Did SYDE live up to the hype?" description="We do love SYDE 😎" />
            <Chart type="Multi" data="SYDEHype" position="left" />
            <Chart type="Bar" data="FavAssignment" position="right" />
            <Section header="Describe 1A in one word..." description="Well, university definitely didn't expand our vocabulary. " />
            <img src={logo} alt="SYDE 2026's words to describe 1a" className="bottom" />
            <NavArrows navBack="highschool" navForward="coop" />
            <Footer />
        </div >
    );
}

export default Lifestyles;