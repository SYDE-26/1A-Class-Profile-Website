import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'
import Chart from '../../charts/chart';
import Section from '../../headings/section';
import logo from '../../../images/Goose word cloud.svg'
import '../img.scss'

function Lifestyles() {
    return (
        <div>
            <ProfileTitle section="lifestyle" title="Lifestyle" />
            <Section header="Mental Health and Time Outdoors" description="1A engineering was definetly stressful. On the other hand, going outside postively impacted their mental health. Note: this was a hybrid term and many of us were living on campus." />
            {/* The data here might say PercentageOfHighschoolFriends but it's really stress level of 1A            */}
            <Chart type="Bar" data="PercentageOfHighschoolFriends" position="left" />
            <Chart type="Stacked" data="Coop Round vs Job Sector" position="right" />
            <Section header="Sleep" description="Much of the cohort didn’t pull a single all nighter. Maybe we’re just great at time mangament." />
            <Chart type="Scatter" data="Course Average vs Difficulty" position="center" />
            <Section header="Social and Physical Life" description="We’re not just smart; gym is love, gym is life. We’re known as the most social engineering for a reason, SYDE is one big happy family." />
            <Chart type="Pie" data="Parents Born" position="left" />
            <Chart type="Multi" data="FriendsHighschool" position="right" />
            <Section header="Before Coming to Waterloo/1A Have You..." description="NEED TO COME UP WITH SUMN" />
            <Chart type="Multi" data="Before 1A" position="center" />
            <Chart type="Multi" data="During 1A" position="center" />
            <Section header="Did SYDE live up to the hype?" description="NEED TO COME UP WITH SUMN" />
            <Chart type="Stacked" data="Coop Round vs Job Sector" position="left" />
            <Chart type="Bar" data="FavAssignment" position="right" />
            <Section header="Describe 1A in one word..." description="1A was “Chaotic” for most of us. " />
            <img src={logo} alt="SYDE 2026's words to describe 1a" className="bottom" />
            <NavArrows navBack="highschool" navForward="coop" />
            <Footer />
        </div >
    );
}

export default Lifestyles;