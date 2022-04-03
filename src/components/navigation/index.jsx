import React from 'react';
import '../navigation/navigation.scss';


const GradientBackground = () => {

    const [center,setCenter] = React.useState(false);

    // function Console(e) {
    //     console.log(Pages[index].id)
    // }

    const Pages = [
        {id: 1, text: 'Co-op', link: '/coop', blurb: 'Class average, courses, attendance, etc.'},
        {id: 2, text: 'Academics', link: '/academics', blurb: 'Balance between co-op and academics, etc.'},
        {id: 3, text: 'Demographics', link: '/demographics', blurb: 'Gender, ethnicities, hometown, etc.'},
        {id: 4, text: 'High School', link: '/highschool', blurb: 'Admissions, extracurriculars, advice from the cohort, etc.'},
        {id: 5, text: 'Lifestyle', link: '/lifestyle', blurb: 'Mental health, sleep, social life, etc.'}
    ]

    const GradientSelection = ['CoopGradient', 'AcademicsGradient', 'DemographicsGradient', 'HighSchoolGradient', 'LifeStyleGradient']
    
    function Console(e) {
        console.log(e.target.id)
    }

    // function toggle() {
    //     var header = document.getElementByClassName("wrapper");
    //     var btns = header.getElementsByClassName("CircleWrapper");
    //     for (var i = 0; i < btns.length; i++) {
    //         btns[i].addEventListener("click", function() {
    //         var current = document.getElementsByClassName("active");
    //         if (current.length > 0) { 
    //             current[0].className = current[0].className.replace(" active", "");
    //         }
    //         this.className += " active";
    //         });
    //     }
    // }

   function toggleClass () {
    setCenter(!center);
  };

    return (
        <div className='Wrapper'>
            {Pages.map((page, index) => (
                <section  className={center ? 'CircleWrapper Active': 'CircleWrapper'} 
                onClick={toggleClass} >
                    <div  onClick = {toggleClass} className={GradientSelection[index]}>
                        <div id = {page.id} onClick = {Console}  className={`${Pages[index].text} BlackCircle`} >
                        {/* <div onClick = {Clicked} className={center ? `${page.text} BlackCircle Center` : `${page.text} BlackCircle`}> */}
                            <div className='Text'>
                                <p onClick=''>{page.text}</p>
                                { center ? <p className = 'Blurb'>{page.blurb}</p> : ''}
                                { center ? <a href = {page.link}>< img src = "../navarrow.png"/></a> : ''}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default GradientBackground