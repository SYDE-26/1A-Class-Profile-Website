import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';

function Highschool() {
    return (
        <div>
            <NavArrows navBack="demographics" navForward="lifestyles" />
            <Footer />
        </div>
    );
}

export default Highschool;