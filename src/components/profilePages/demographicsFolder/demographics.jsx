import React from 'react';
import Footer from '../../footer/footer';
import NavArrows from '../../navArrows/navArrows';
import ProfileTitle from '../../headings/ProfileTitle'
import Section from '../../headings/section';
import Chart from '../../charts/chart';

function Demographics() {
    return (
        <div>
            <ProfileTitle section="demographics" title="Demographics" />
            <Section header="Gender and Sexuality" description="A close tie between males and females in the ‘26 cohort. This is typical to see amoungst SYDE." />
            <Chart type="Pie" data="Identity" position="left" />
            <Chart type="Pie" data="Sexuality" position="right" />
            <Section header="Ethnicities and Religion" description="Many of the SYDE ‘26 cohort is East or South Asian. A lot of us identify with Christianity as our religion." />
            <Chart type="Bar" data="EthnicityIdentity" position="center" />
            <Chart type="Bar" data="ReligionEthnicity" position="center" />
            <Section header="Hometown and Birth Years" description="A significant amount of us are from the GTA." />
            <Chart type="Pie" data="BirthYear" position="left" />
            <Chart type="Bar" data="Hometown" position="right" />
            <Section header="Parents" description="" />
            <Chart type="Pie" data="DescribeParents" position="left" />
            <Chart type="Pie" data="Parents Born" position="right" />
            <Chart type="Bar" data="HouseholdIncome" position="center" />
            <NavArrows navBack="academics" navForward="highschool" />
            <Footer />
        </div >
    );
}

export default Demographics;