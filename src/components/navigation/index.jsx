import React from 'react';
import '../navigation/navigation.scss';

const GradientBackground = () => {

    const Pages = [
        {text: 'Co-op', link: '/coop'},
        {text: 'Academics', link: '/academics'},
        {text: 'Demographics', link: '/demographics'},
        {text: 'High School', link: '/highschool'},
        {text: 'Lifestyle', link: '/lifestyle'}
    ]

    const GradientSelection = ['CoopGradient', 'AcademicsGradient', 'DemographicsGradient', 'HighSchoolGradient', 'LifeStyleGradient']

    return (
        <div className='Wrapper'>
            {Pages.map((page, index) => (
                <div className='CircleWrapper'>
                    <div className={GradientSelection[index]}>
                        <div className='BlackCircle'>
                            <p className='Text' onClick=''>{page.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GradientBackground