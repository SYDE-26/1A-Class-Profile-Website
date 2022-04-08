import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'

function Lifestyles() {
    return (
        <div>
            <ProfileTitle section="lifestyle" title="Lifestyle"/>
            <NavArrows navBack="highschool" navForward="coop" />
            <Footer />
        </div>
    );
}

export default Lifestyles;