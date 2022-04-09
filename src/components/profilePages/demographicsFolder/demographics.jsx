import React from 'react';
import Footer from '../../footer/footer';
import NavArrows from '../../navArrows/navArrows';
import ProfileTitle from '../../headings/ProfileTitle'
import SectionHeader from '../../headings/sectionHeader';
import GraphDescription from '../../headings/graphDescription';
import PieChart from '../../charts/pieGraph';
import './charts.scss'

function Demographics() {
    return (
        <div>
            <ProfileTitle section="demographics" title="Demographics" />
            <SectionHeader header="Gender and Sexuality" />
            <GraphDescription description="A close tie between males and females in the '26 cohort. This is typical to see amongust SYDE" />
            <div className="double">
                <div className="chart">
                    <div className="double">
                        <PieChart datatype="Parents Born" width="auto" height="auto" />
                    </div>
                    <div className="double">
                        <PieChart datatype="Parents Born" width="auto" height="auto" />
                    </div>
                </div>
            </div>
            <SectionHeader header="Ethnicities and Religion" />
            <GraphDescription description="Many of the SYDE '26 cohort is East or South Asian. A lot of us identify with christianity as our religion" />
            <SectionHeader header="Hometown and Birth Years" />
            <GraphDescription description="A significant amount of us are from the GTA." />
            <SectionHeader header="Parents" />
            <GraphDescription description="" />
            <NavArrows navBack="academics" navForward="highschool" />
            <Footer />
        </div >
    );
}

export default Demographics;