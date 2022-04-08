import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'

function Highschool() {
    return (
        <div>
            <ProfileTitle section="admissions" title="High School"/>
            <NavArrows navBack="demographics" navForward="lifestyles" />
            <Footer />
        </div>
    );
}

export default Highschool;