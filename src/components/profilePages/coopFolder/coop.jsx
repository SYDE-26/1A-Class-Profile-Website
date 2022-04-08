import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'

function Coop() {
    return (
        <div>
            <ProfileTitle section="coop" title="Co-op"/>
            <NavArrows navBack="lifestyles" navForward="academics" />
            <Footer />
        </div>
    );
}

export default Coop;