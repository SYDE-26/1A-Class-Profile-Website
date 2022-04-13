import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import BtnSlider from '../carousel/buttonSlider';
import Vector from '../../images/HomePageVector.svg';

const GradientBackground = () => {
    const [className, setClassName] = useState(0)
    const [onClickChange, setOnClickChange] = useState('');
    const [change, setChange] = useState('');
    const [slideIndex, setSlideIndex] = useState(1);  
    const [slideIndex2, setSlideIndex2] = useState(1);
    
    const Pages = [
        { id: 1, text: 'Co-op', link: '/coop', blurb: 'Class average, courses, attendance, etc.' },
        { id: 2, text: 'Academics', link: '/academics', blurb: 'Balance between co-op \n and academics, etc.' },
        { id: 3, text: 'Demographics', link: '/demographics', blurb: 'Gender, ethnicities, \n hometown, etc.' },
        { id: 4, text: 'High School', link: '/highschool', blurb: 'Admissions, \n extracurriculars, advice \n from the cohort, etc.' },
        { id: 5, text: 'Lifestyle', link: '/lifestyles', blurb: 'Mental health, sleep, social life, etc.' }
    ] 
    
    //console.log(Pages.text)
    const GradientSelection = ['CoopGradient', 'AcademicsGradient', 'DemographicsGradient', 'HighSchoolGradient', 'LifeStyleGradient'];
    
    const ClickGradient = ['CoopChange', 'AcademicsChange', 'DemographicsChange', 'HighSchoolChange', 'LifeStyleChange']; 

    const toggleClass = (page, index) => {
        console.log(index)
    };

    const nextSlide = () => {
        if (slideIndex !== Pages.length - 1) {
          setSlideIndex(slideIndex + 1)
          setSlideIndex2(slideIndex2 + 1)
        }
        else if (slideIndex === Pages.length - 1) {
          setSlideIndex(2)
          setSlideIndex2(1)
        }
      }
    
    const prevSlide = () => {
        if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1)
        setSlideIndex2(slideIndex2 - 1)
        }
        else if (slideIndex === 1) {
        setSlideIndex(Pages.length - 2)
        setSlideIndex2(Pages.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
        setSlideIndex2(index)
    }

    const clickButton = () => {
        if (slideIndex === 1){
            setClassName = 0
        }
        else if (slideIndex === 2){
            setClassName = 1
        }
    }

    const screenClassName = (slideIndex) => {
        console.log(slideIndex)
        if (slideIndex2 % 2 == 0) {
            setChange('Translate1')
        }
        else {
            setChange(null)
        }
    } 

    //console.log(slideIndex)

    return (
        <div className='UltimateWrapper'>
            <div className='InstructionWrapper'>
                <img src={Vector} />
                <p>Click a circle below to go to each section</p>
                <img src={Vector} />
            </div>
            <div className='Wrapper'>
                {Pages.map((page, index) => (
                    <section className={`CircleWrapper ${page.text}`}>
                        <div onClick={() => setOnClickChange(ClickGradient[index])} className={GradientSelection[index]} onMouseOver={() => setOnClickChange(ClickGradient[index])}>        
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
            <div className='MobileWrapper'>
                {Pages.map((page, index) => (
                    <section className={`CircleWrapper ${page.text}`}>
                        <div onClick={() => setOnClickChange(ClickGradient[index])} className={change.includes('Translate1') ? `${GradientSelection[index]} Translate1` : GradientSelection[index]}>        
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
            <div className='buttonSlider'>
                <div className="container-dots">
                    {Array.from({ length: 2 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                    ))}
                </div>
                <BtnSlider className='button' onClick={() => screenClassName(slideIndex)} direction={"prev"} moveSlide={prevSlide}/>
                <BtnSlider className='button' onClick={() => screenClassName(slideIndex)} direction={"next"} moveSlide={nextSlide}/>
            </div>
            {/*
            <div className='PhoneWrapper'>
                {Pages?.slice((slideIndex2 - 1) * 1, (slideIndex2) * 1).map((page, index) => (
                    <section className={`CircleWrapper ${page.text}`}>
                        <div onClick={() => setOnClickChange(ClickGradient[index])} className={GradientSelection[index + slideIndex - 2]}>        
                            <div id={page.id}className={onClickChange.includes(ClickGradient[index]) ? `${ClickGradient[index + slideIndex - 2]} BlackCircle`: 'BlackCircle'}>
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
            <div className='phoneButtonSlider'>
                <div className="container-dots2">
                    {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex2 === index + 1 ? "dot active" : "dot"}
                    ></div>
                    ))}
                </div>
                <BtnSlider className='button' onClick={() => clickButton} direction={"prev"} moveSlide={prevSlide}/>
                <BtnSlider className='button' onClick={() => clickButton} direction={"next"} moveSlide={nextSlide}/>
            </div>
            */}
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