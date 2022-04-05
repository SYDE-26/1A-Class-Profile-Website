import React from 'react';
import CircleImage from '../../circleImage'
import SectionHeader from '../../headings/sectionHeader';

function About() {
    const designAvatars = []
    const dataAvatars = []
    const softwareAvatars = []

    for (let i = 0 ; i < 6 ; i++) {
        designAvatars.push(<CircleImage imagePath=""/>)
    }

    for (let i = 0 ; i < 6 ; i++) {
        dataAvatars.push(<CircleImage imagePath=""/>)
    }

    for (let i = 0 ; i < 7 ; i++) {
        softwareAvatars.push(<CircleImage imagePath=""/>)
    }
    
    return (
        <div>
            {/* test with all props passed in */}
            {/* <CircleImage 
                name="Aashi" 
                imagePath="https://media-exp1.licdn.com/dms/image/C4E03AQHlb6vM_WLXCA/profile-displayphoto-shrink_200_200/0/1626704722292?e=1654732800&v=beta&t=AidaNy4k0S__k3cDA6pqb1hjWHubRU92CrzkWfldX8Y"
                linkedin="https://www.linkedin.com/in/aashi-shah-225a041b2/"
            /> */}

            {/* <img src="" alt="SYDE 26 on our first day of classes!"/> */}
            <SectionHeader header="Who Are We?"/>
            <p>At the beginning of September 2021...</p>
            <SectionHeader header="About the Class Profile"/>
            <p>Every year, the Systems Design Engineering program...</p>
            <SectionHeader header="Credits"/>
            <div className="design">
                <p className='team'>Design</p>
                {designAvatars}
            </div>
            <div className="data">
                <p className='team'>Data</p>
                {dataAvatars}
            </div>
            <div className="software">
                <p className='team'>Software</p>
                {softwareAvatars}
            </div>
        </div>
    );
}

export default About;