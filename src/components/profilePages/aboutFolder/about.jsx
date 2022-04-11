import React from 'react';
import ClassPic from './classPic.png'
import CircleImage from '../../circleImage'
import Footer from '../../footer/footer';
import githubLogo from './githubLogo.png'
import reportIcon from './reportIcon.png'
import './about.scss'
import { designTeam } from './avatarInfo.jsx'
import { dataTeam } from './avatarInfo.jsx'
import { softwareTeam } from './avatarInfo.jsx'

function About() {
    const designAvatars = designTeam.map(item => {
        return <CircleImage name={item.name} linkedin={item.linkedin} imagePath={`../credit/design/img${item.id}.png`} />
    })

    const dataAvatars = dataTeam.map(item => {
        return <CircleImage name={item.name} linkedin={item.linkedin} imagePath={`../credit/data/img${item.id}.png`} />
    })

    const softwareAvatars = softwareTeam.map(item => {
        return <CircleImage name={item.name} linkedin={item.linkedin} imagePath={`../credit/software/img${item.id}.png`} />
    })

    return (
        <div>
            <div className='about'>
                <img src={ClassPic} alt="SYDE 26 on our first day of classes!" className='classPic' />
                <div className='descriptions'>
                    <div className='column'>
                        <h3 className='heading'>Who Are We?</h3>
                        <p className='textBox'>
                            At the beginning of September 2021, nearly 120 motivated students began their journey at the University of Waterloo in Systems Design Engineering. This unique, interdisciplinary program focuses on teaching students how to design any solution through systems thinking and viewing problems holistically to understand the bigger effects of their solution.
                        </p>
                        <p className='textBox'>
                            Coming in, there was a wide variety of emotions. For many of us, there was excitement to meet new people, nervousness to live on our own, and anxiousness to know how well our pandemic senior years prepared us to handle university learning! Over the next 4 months, we tackled school and the co-op search, had many first-experiences, met some friends for life and, best of all, we built a mobility device for an alien.
                        </p>
                        <p className='textBox'>
                            Who are we you may ask? We are a group of highly, unique individuals with many interests that are motivated by a span of factors. Together, we share a common goal to maintain the SYDE tradition of being community oriented while building the skills and knowledge to reach new heights internally and externally. We are the SYDE class of 2026!
                        </p>
                    </div>
                    <div className='column two'>
                        <h3 className='heading'>About the Class Profile</h3>
                        <p className='textBox'>
                            Every year, the Systems Design Engineering program at the University of Waterloo opens their applications for a new batch of fresh, young engineers intrigued by what SYDE truly is. Websites tell them, it's about applying a systemic thinking process to a breadth of engineering disciplines. Big words, but what does that truly mean?
                        </p>
                        <p className='textBox'>
                            As much as we'd love to answer that question, we definitely cannot. However, there are things about our SYDE experience so far that we CAN pick out for you - from academics and job statistics, to other, *fun* aspects of university life. To truly embody the idea that we create the experience that we want, we've put together the data we've gotten from the SYDE 2026 cohort to provide some insight as to who we are, where we come from, and what we're doing right now!
                        </p>
                        <p className='textBox'>
                            We've got a dedicated team of 20 students from our cohort working on this project, and we'll be continuously working on it throughout our future study and co-op terms. Want to check in on the 26's? Feel free to revisit this profile whenever for the most updated information about the SYDE 2026 cohort!
                        </p>
                    </div>
                </div>
            </div>
            <div className='credit'>
                <h3>Credits</h3>
                <div className='design'>
                    <p className='team'>Design</p>
                        <div className='avatarRow'>{designAvatars}</div>
                </div>
                <div className='data'>
                    <p className='team'>Data</p>
                    <div className='avatarRow'>{dataAvatars}</div>
                </div>
                <div className='software'>
                    <p className='team'>Software</p>
                    <div className='avatarRow'>{softwareAvatars}</div>
                </div>              
            </div>
            <div className='links'>
                <h3>Links</h3>
                <div className='github'>
                    <img src={githubLogo} className='icon' />
                    <p className="linkText"><a href="https://github.com/SYDE-26/1A-Class-Profile-Website" target="_blank">Github Repo</a></p>
                </div>
                <div className='report'>
                    <img src={reportIcon} className='icon' />
                    <p className="linkText"><a target="_blank">Data Science Report (PDF)</a></p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;