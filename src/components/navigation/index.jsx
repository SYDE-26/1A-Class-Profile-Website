import {React, useState} from 'react';
import './navigation.scss';
import $ from 'jquery';


const GradientBackground = () => {

    // var e = $(".Co-op");
    // e.prev().insertAfter(e);

    // const [center, setCenter] = useState(false);
    const [onClickChange, setOnClickChange] = useState('');

    const Pages = [
        {id: 1, text: 'Co-op', link: '/coop', blurb: 'Class average, courses, attendance, etc.'},
        {id: 2, text: 'Academics', link: '/academics', blurb: 'Balance between co-op \n and academics, etc.'},
        {id: 3, text: 'Demographics', link: '/demographics', blurb: 'Gender, ethnicities, \n hometown, etc.'},
        {id: 4, text: 'High School', link: '/highschool', blurb: 'Admissions, \n extracurriculars, advice \n from the cohort, etc.'},
        {id: 5, text: 'Lifestyle', link: '/lifestyle', blurb: 'Mental health, sleep, social life, etc.'}
    ]

    const GradientSelection = ['CoopGradient', 'AcademicsGradient', 'DemographicsGradient', 'HighSchoolGradient', 'LifeStyleGradient']

    const ClickGradient = ['CoopChange', 'AcademicsChange', 'DemographicsChange', 'HighSchoolChange', 'LifeStyleChange']

    const toggleClass = (Pages, index) => {
        // setCenter(!center);
        setOnClickChange(ClickGradient[index])
        console.log(index);
        console.log(Pages);
        // const fromIndex = Pages.indexOf(ClickGradient[index]); // 👉️ 0
        // const toIndex = 2;
        // const element = Pages.splice(fromIndex, 1)[0];
        // Pages.splice(toIndex, 0, element);
        // console.log(Pages);

        var element = Pages[index];
        Pages.splice(index, 1);
        Pages.splice(2, 0, element);
        console.log(Pages);
    };

    // var e = $(".CircleWrapper.Demographics");
    // e.prev().insertAfter(e);

    // var c = $(".CircleWrapper.Co-op");
    // var a = $(".CircleWrapper.Academics");
    // var d = $(".CircleWrapper.Demographics");
    // var h = $(".CircleWrapper.High.School");
    // var l = $(".CircleWrapper.Lifestyle");

    // if ($('.CircleWrapper.Active.Co-op').length){
    //     $( ".CircleWrapper.Active.Co-op" ).insertAfter( ".CircleWrapper.Demographics" );
    // }
    //
    // else if ()
    // else if ()
    // else if ()
    // else if ()


//     const div1 = document.getElementByClass(".CircleWrapper.Co-op");
//     const div2 = document.getElementByClass(".CircleWrapper.Academics");
//     const div3 = document.getElementByClass(".CircleWrapper.");

// div2.after(div1);
// div2.before(div3);

    return (
        <div className='Wrapper'>
            {Pages.map((page, index) => (
                <section  className={onClickChange.includes(ClickGradient[index]) ? `CircleWrapper Active ${page.text}`: `CircleWrapper ${page.text}`}  >
                    <div  onClick = {() => toggleClass(Pages, index)} className={GradientSelection[index]}>
                        <div id = {page.id} className={onClickChange.includes(ClickGradient[index]) ? `${ClickGradient[index]} BlackCircle` : 'BlackCircle'}>
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