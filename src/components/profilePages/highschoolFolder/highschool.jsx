import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'
import Chart from '../../charts/chart';
import Section from '../../headings/section';
import logo from '../../../images/whattoknow.svg'
import logo2 from '../../../images/once u r in.svg'
import '../img.scss'
import { Tiles1, Tiles2 } from './tiles';

function Highschool() {
    return (
        <div>
            <ProfileTitle section="admissions" title="High School" />
            <Section header="Senior Year Format" description="Grade 12 for most of the students was completed through a hybrid quadmester format. Ontario kids had a field day when they learned that BC had in-person exams." />
            <Chart type="Pie" data="HighschoolFormat" position="left" />
            <Chart type="Pie" data="HighschoolAttend" position="right" />
            <Section header="Admission Averages + Extracurriculars" description="The admission average for the SYDE ‘26 cohort was 97%. The majority of us were not part of any enrichment program in high school but we were as well-rounded as a TsTsian's eye 👽" />
            <Chart type="Histogram" data="Top6" position="left" />
            <Chart type="Box" data="admissionVSHometown" position="right" />
            <Chart type="Bar" data="HighschoolEnrichment" position="left" />
            <Chart type="Bar" data="HighschoolPrior" position="right" />
            <Section header="Alternate University Choices" description="UofT(ears) and McMaster University were the most popular back-up options, but Waterloo's geese were simply too attractive." />
            <Chart type="Bar" data="OtherUnis" position="center" />
            <Section header="Advice for Prospective + New SYDE Students" description="What is the biggest piece of advice/wisdom you would give to someone thinking about applying to SYDE? " />
            <Tiles1 />
            <Section header="Listen carefully young grasshoppers…" />
            <Tiles2 />
            <NavArrows navBack="demographics" navForward="lifestyles" />
            <Footer />
        </div>
    );
}

export default Highschool;