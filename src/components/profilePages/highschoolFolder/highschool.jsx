import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'
import Chart from '../../charts/chart';
import Section from '../../headings/section';
import logo from '../../../images/whattoknow.svg'
import logo2 from '../../../images/once u r in.svg'
import '../img.scss'

function Highschool() {
    return (
        <div>
            <ProfileTitle section="admissions" title="High School" />
            <Section header="Senior Year Format" description="Grade 12 for most of the students was completed through a blend of both in-person and online classes in a quadmester format." />
            <Chart type="Pie" data="HighschoolFormat" position="left" />
            <Chart type="Pie" data="HighschoolAttend" position="right" />
            <Section header="Admission Averages + Extracurriculars" description="The admission average for the SYDE ‘26 cohort was 97. The majority of us were not part of any enrichment program in high school but we did participate in a variety of extracurr iculars." />
            <Chart type="Histogram" data="Top6" position="left" />
            <Chart type="Stacked" data="Coop Round vs Job Sector" position="right" />
            <Chart type="Bar" data="HighschoolEnrichment" position="left" />
            <Chart type="Bar" data="HighschoolPrior" position="right" />
            <Section header="Alternate University Choices" description="UofT and McMaster University were the most popular back-up options." />
            <Chart type="Bar" data="OtherUnis" position="center" />
            <Section header="Advice for Prospective + New SYDE Students" description="What is the biggest piece of advice/wisdom you would give to someone thinking about applying to SYDE? " />
            <img src={logo} alt="SYDE 2026's words to describe 1a" className="bottom" />
            <Section header="Once you're in, our class wants you to remember that…" />
            <img src={logo2} alt="SYDE 2026's words to describe 1a" className="bottom" />
            <NavArrows navBack="demographics" navForward="lifestyles" />
            <Footer />
        </div>
    );
}

export default Highschool;