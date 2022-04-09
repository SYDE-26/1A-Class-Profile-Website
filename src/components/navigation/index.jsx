import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import Vector from '../../images/HomePageVector.svg';

const GradientBackground = () => {
    const [onClickChange, setOnClickChange] = useState('');   

    const Pages = [
        { id: 1, text: 'Co-op', link: '/coop', blurb: 'Class average, courses, attendance, etc.' },
        { id: 2, text: 'Academics', link: '/academics', blurb: 'Balance between co-op \n and academics, etc.' },
        { id: 3, text: 'Demographics', link: '/demographics', blurb: 'Gender, ethnicities, \n hometown, etc.' },
        { id: 4, text: 'High School', link: '/highschool', blurb: 'Admissions, \n extracurriculars, advice \n from the cohort, etc.' },
        { id: 5, text: 'Lifestyle', link: '/lifestyles', blurb: 'Mental health, sleep, social life, etc.' }
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
        <div className='UltimateWrapper'>
            <div className='InstructionWrapper'>
                <img src={Vector} />
                <p>Click a circle below to go to each section</p>
                <img src={Vector} />
            </div>
            <div className='Wrapper'>
                {Pages.map((page, index) => (
                    <section className={onClickChange.includes(ClickGradient[index]) ? `CircleWrapper Active ${page.text}` : `CircleWrapper ${page.text}`}  >
                        <div onClick={() => toggleClass(Pages, index)} className={GradientSelection[index]}>        
                            <div id={page.id} className={onClickChange.includes(ClickGradient[index]) ? `${ClickGradient[index]} BlackCircle` : 'BlackCircle'}>
                                <div className='Text'>
                                    <p>{page.text}</p>
                                    {onClickChange.includes(ClickGradient[index]) ? <p className='Blurb'>{page.blurb}</p> : ''}
                                    {onClickChange.includes(ClickGradient[index]) ? <Link to={page.link}>< img src="../navarrow.png" alt="Arrows" /></Link> : ''}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            <div className='DescriptionWrapper'>
                <div className='BottomCircle'>
                    <div className='DescriptionTextWrapper'>
                        <h4>Welcome to the SYDE 2026 class profile!</h4>
                        <p className='DescriptionPText'>Feel free to click around and learn about the SYDE Class of 2026! <br></br> <br></br>
                        Check out our photo gallery for proof that engineering kids don’t just study :)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GradientBackground;