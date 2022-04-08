import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'

function Academics() {
    return (
        <div>
            <ProfileTitle section="academics" title="Academics"/>
            <NavArrows navBack="coop" navForward="demographics" />
            <Footer />
        </div>
    );
}

export default Academics;