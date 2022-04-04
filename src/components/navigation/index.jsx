import { React, useState } from 'react';
import './navigation.scss';
/*
import $ from 'jquery';
*/
import { Link } from 'react-router-dom';




const GradientBackground = () => {
    const [onClickChange, setOnClickChange] = useState('');   

    const Pages = [
        { id: 1, text: 'Co-op', link: '../../pages/coop', blurb: 'Class average, courses, attendance, etc.' },
        { id: 2, text: 'Academics', link: '../../pages/academics', blurb: 'Balance between co-op \n and academics, etc.' },
        { id: 3, text: 'Demographics', link: '../../pages/demographics', blurb: 'Gender, ethnicities, \n hometown, etc.' },
        { id: 4, text: 'High School', link: '../../pages/highschool', blurb: 'Admissions, \n extracurriculars, advice \n from the cohort, etc.' },
        { id: 5, text: 'Lifestyle', link: '../../pages/lifestyles', blurb: 'Mental health, sleep, social life, etc.' }
    ]
    
    const GradientSelection = ['CoopGradient', 'AcademicsGradient', 'DemographicsGradient', 'HighSchoolGradient', 'LifeStyleGradient'];
    
    const ClickGradient = ['CoopChange', 'AcademicsChange', 'DemographicsChange', 'HighSchoolChange', 'LifeStyleChange']; 

    const toggleClass = (Pages, index) => {
        setOnClickChange(ClickGradient[index])
        var element = Pages[index];
        Pages.splice(index, 1);
        Pages.splice(2, 0, element);
    };

    return (
        <div className='Wrapper'>
            {Pages.map((page, index) => (
                <section className={onClickChange.includes(ClickGradient[index]) ? `CircleWrapper Active ${page.text}` : `CircleWrapper ${page.text}`}  >
                    <div onClick={() => toggleClass(Pages, index)} className={GradientSelection[index]}>        
                        <div id={page.id} className={onClickChange.includes(ClickGradient[index]) ? `${ClickGradient[index]} BlackCircle` : 'BlackCircle'}>
                            <div className='Text'>
                                <p>{page.text}</p>
                                {onClickChange.includes(ClickGradient[index]) ? <p className='Blurb'>{page.blurb}</p> : ''}
                                {onClickChange.includes(ClickGradient[index]) ? <Link to={page.link}>< img src="../navarrow.png" /></Link> : ''}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default GradientBackground