import React from 'react';
import Footer from '../../footer/footer';
import NavArrows from '../../navArrows/navArrows';
import ProfileTitle from '../../headings/ProfileTitle'
import SectionHeader from '../../headings/sectionHeader';
import GraphDescription from '../../headings/graphDescription';
import PieChart from '../../charts/pieGraph';

function Demographics() {
    return (
        <div>
            <ProfileTitle section="demographics" title="Demographics"/>
            {/* <Section title="Gender and Sexuality" graph={<PieChart/>}/> */}
            <SectionHeader header="Gender and Sexuality"/>
            <GraphDescription description="dummy"/>
            <PieChart datatype="Gender and Sexuality" width="100" height="100"/>
            <NavArrows navBack="academics" navForward="highschool" />
            <Footer />
        </div >
    );
}

export default Demographics;