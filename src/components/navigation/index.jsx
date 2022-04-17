import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import BtnSlider from './button';
import Vector from '../../images/HomePageVector.svg';

const GradientBackground = () => {
    const [onClickChange, setOnClickChange] = useState('');
    const [change, setChange] = useState('');
    const [slideIndex, setSlideIndex] = useState(1);  
    const [phoneSlideIndex, setPhoneSlideIndex] = useState(1);
    
    const Pages = [
        { id: 1, text: 'Co-op', link: '/coop', blurb: 'Class average, courses, attendance, etc.' },
        { id: 2, text: 'Academics', link: '/academics', blurb: 'Balance between co-op \n and academics, etc.' },
        { id: 3, text: 'Demographics', link: '/demographics', blurb: 'Gender, ethnicities, \n hometown, etc.' },
        { id: 4, text: 'High School', link: '/highschool', blurb: 'Admissions, \n extracurriculars, advice \n from the cohort, etc.' },
        { id: 5, text: 'Lifestyle', link: '/lifestyles', blurb: 'Mental health, sleep, social life, etc.' }
    ] 
    
    const GradientSelection = ['CoopGradient', 'AcademicsGradient', 'DemographicsGradient', 'HighSchoolGradient', 'LifeStyleGradient'];
    
    const ClickGradient = ['CoopChange', 'AcademicsChange', 'DemographicsChange', 'HighSchoolChange', 'LifeStyleChange']; 

    const nextSlide = () => {
        if (slideIndex !== 1) {
          setSlideIndex(1)
          setChange('')
        }
        else if (slideIndex === 1) {
          setSlideIndex(2)
          setChange('Translate1')
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
        setSlideIndex(1)
        setChange('')        }
        else if (slideIndex === 1) {
        setSlideIndex(2)
        setChange('Translate1')
        }
    }

    const phoneNextSlide = () => {
        if (phoneSlideIndex !== Pages.length) {
            setPhoneSlideIndex(phoneSlideIndex + 1)
        }
        else if (phoneSlideIndex === Pages.length) {
            setPhoneSlideIndex(1)
        }
    }

    const phonePrevSlide = () => {
        if (phoneSlideIndex !== 1) {
            setPhoneSlideIndex(phoneSlideIndex - 1)
          }
          else if (phoneSlideIndex === 1) {
            setPhoneSlideIndex(Pages.length)
          }
    }
    const moveDot = index => {
        setSlideIndex(index)
        if (slideIndex === 2) {
            setChange('')
        }
        else if (slideIndex === 1) {
            setChange('Translate1')
        }
        setPhoneSlideIndex(index)
    }

    return (
        <div className='UltimateWrapper'>
            <div className='InstructionWrapper'>
                <img src={Vector} alt="Vector" />
                <p>Click a circle below to go to each section</p>
                <img src={Vector} alt="Vector" />
            </div>
            <div className='Wrapper'>
                {Pages.map((page, index) => (
                    <section className={`CircleWrapper ${page.text}`}>
                        <div onClick={() => setOnClickChange(ClickGradient[index])} className={change.includes('Translate1') ? `${GradientSelection[index]} Translate1` : GradientSelection[index]} onMouseOver={() => setOnClickChange(ClickGradient[index])} onMouseLeave={() => setOnClickChange(`${GradientSelection[index]} notVisible`)}>        
                            <div id={page.id}className={onClickChange.includes(ClickGradient[index]) ? `${ClickGradient[index]} BlackCircle`: 'BlackCircle'}>
                                <div className='Text'>
                                    <Link to={page.link}><p>{page.text}</p></Link>
                                    {onClickChange.includes(ClickGradient[index]) ? <Link to={page.link}><p className='Blurb'>{page.blurb}</p></Link> : ''}
                                    {onClickChange.includes(ClickGradient[index]) ? <Link to={page.link}>< img src="../navarrow.png" alt="Arrows" /></Link> : ''}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div> 
            <div className='PhoneWrapper'>
                {Pages.map((page, index) => (
                        <div onClick={() => setOnClickChange(ClickGradient[index])} className={phoneSlideIndex === index + 1 ? GradientSelection[index] : `${GradientSelection[index]} notVisible`}>        
                            <div id={page.id}className={onClickChange.includes(ClickGradient[index]) ?`${ClickGradient[index]} BlackCircle` : 'BlackCircle'}>
                                <div className='Text'>
                                    <Link to={page.link}><p>{page.text}</p></Link>
                                    {onClickChange.includes(ClickGradient[index]) ? <Link to={page.link}><p className='Blurb'>{page.blurb}</p></Link> : ''}
                                    {onClickChange.includes(ClickGradient[index]) ? <Link to={page.link}>< img src="../navarrow.png" alt="Arrows" /></Link> : ''}
                                </div>
                            </div>
                        </div>   
                ))}
            </div> 
            <div className='buttonSlider'>
                <div className="container-dots">
                    {Array.from({ length: 2 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                    ))}
                </div>
                <BtnSlider className='button' direction={"prev"} moveSlide={prevSlide}/>
                <BtnSlider className='button' direction={"next"} moveSlide={nextSlide}/>
            </div>
            <div className='phoneButtonSlider'>
                <div className="container-dots2">
                    {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={phoneSlideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                    ))}
                </div>
                <BtnSlider className='button' direction={"prev"} moveSlide={phonePrevSlide}/>
                <BtnSlider className='button' direction={"next"} moveSlide={phoneNextSlide}/>
            </div>
            <div className='DescriptionWrapper'>
                <div className='BottomCircle'>
                    <div className='DescriptionTextWrapper'>
                        <h3>Welcome to the SYDE 2026 class profile!</h3>
                        <p>Feel free to click around and learn about the SYDE Class of 2026! <br></br> <br></br>
                        Check out our <Link className='DescriptionPText' to='/photoGallery'>photo gallery</Link> for proof that engineering kids don’t just study :)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GradientBackground;