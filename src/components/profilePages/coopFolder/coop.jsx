import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'
import Chart from '../../charts/chart';
import Section from '../../headings/section';
import logo from '../../../images/weirdqs.svg'
import '../img.scss'
import FlexTiles from './flexTiles';

function Coop() {
    return (
        <div>
            <ProfileTitle section="coop" title="Co-op" />
            <Section header="Industries and Jobs" description="Software and Banking/Financial were the top two industries that hired SYDE students. Software is the most popular field this cohort accepted." />
            <Chart type="Stacked" data="IndustryHiring" position="center" />
            <Chart type="Stacked" data="JobAcceptance" position="center" />
            <Section header="External Factors and Co-op" description="Is rags to riches a hoax? Are code monkeys rolling in dough? Did our academic tryhards reap the fruits of their labour? " />
            <Chart type="Box" data="jobTypeVSpay" position="center" />
            <Chart type="Box" data="householdIncomeVSJobPay" position="center" />
            <Chart type="Box" data="averageVSPay" position="center" />
            <Section header="Gender Identity and Co-op" description="Did Gen Z bring changes to how different gender identities are treated in the workforce? " />
            <Chart type="Multi" data="Gender vs Co-op Type" position="center" />
            <Chart type="Multi" data="Gender Pay vs Round" position="center" />
            <Section header="Weirdest Job Interview Questions" description="" />
            <FlexTiles />
            <NavArrows navBack="lifestyles" navForward="academics" />
            <Footer />
        </div>
    );
}

export default Coop;