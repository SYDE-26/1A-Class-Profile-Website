import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'
import Chart from '../../charts/chart';
import Section from '../../headings/section';
import logo from '../../../images/weirdqs.svg'
import '../img.scss'

function Coop() {
    return (
        <div>
            <ProfileTitle section="coop" title="Co-op" />
            <Section header="Industries and Jobs" description="Software and Banking/Financial were the top two industries that hired SYDE students. Software is the most popular field this cohort accepted." />
            <Chart type="Stacked" data="IndustryHiring" position="center" />
            <Chart type="Stacked" data="JobAcceptance" position="center" />
            <Section header="External Factors and Co-op" description="NEED TO COME UP WITH SUMN" />
            <Chart type="Stacked" data="Coop Round vs Job Sector" position="center" />
            <Chart type="Stacked" data="Coop Round vs Job Sector" position="center" />
            <Chart type="Stacked" data="Coop Round vs Job Sector" position="center" />
            <Section header="Gender Identity and Co-op" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Chart type="Scatter" data="Course Average vs Difficulty" position="center" />
            <Chart type="Scatter" data="Course Average vs Difficulty" position="center" />
            <Chart type="Scatter" data="Course Average vs Difficulty" position="center" />
            <Section header="Study Habits" description="Hopefully they improve by 1B." />

            <img src={logo} alt="" className="bottom" />
            <NavArrows navBack="lifestyles" navForward="academics" />
            <Footer />
        </div>
    );
}

export default Coop;