import {React, useState} from 'react';
import './navigation.scss';


const GradientBackground = () => {

    const [center, setCenter] = useState(false);
    const [onClickChange, setOnClickChange] = useState('');

    const Pages = [
        {id: 1, text: 'Co-op', link: '/coop', blurb: 'Class average, courses, attendance, etc.'},
        {id: 2, text: 'Academics', link: '/academics', blurb: 'Balance between co-op and academics, etc.'},
        {id: 3, text: 'Demographics', link: '/demographics', blurb: 'Gender, ethnicities, hometown, etc.'},
        {id: 4, text: 'High School', link: '/highschool', blurb: 'Admissions, extracurriculars, advice from the cohort, etc.'},
        {id: 5, text: 'Lifestyle', link: '/lifestyle', blurb: 'Mental health, sleep, social life, etc.'}
    ]

    const GradientSelection = ['CoopGradient', 'AcademicsGradient', 'DemographicsGradient', 'HighSchoolGradient', 'LifeStyleGradient']

    const ClickGradient = ['CoopChange', 'AcademicsChange', 'DemographicsChange', 'HighSchoolChange', 'LifeStyleChange']

    const toggleClass = (index) => {
        setCenter(!center);
        setOnClickChange(ClickGradient[index])
    };

    return (
        <div className='Wrapper'>
            {Pages.map((page, index) => (
                <section  className={center ? 'CircleWrapper Active': 'CircleWrapper'}  >
                    <div  onClick = {() => toggleClass(index)} className={GradientSelection[index]}>
                        <div id = {page.id} className={onClickChange.includes(ClickGradient[index]) ? ClickGradient[index] : 'BlackCircle'}>
                            <div className='Text'>
                                <p>{page.text}</p>
                                {onClickChange.includes(ClickGradient[index]) ? <p className = 'Blurb'>{page.blurb}</p> : ''}
                                {onClickChange.includes(ClickGradient[index]) ? <a href = {page.link}>< img src = "../navarrow.png"/></a> : ''}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default GradientBackground