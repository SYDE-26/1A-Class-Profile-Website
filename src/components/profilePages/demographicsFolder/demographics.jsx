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
            <SectionHeader header="Gender and Sexuality"/>
            <GraphDescription description="dummy"/>
            {/* <PieChart/> */}
            <NavArrows navBack="academics" navForward="highschool" />
            <Footer />
        </div >
    );
}

export default Demographics;