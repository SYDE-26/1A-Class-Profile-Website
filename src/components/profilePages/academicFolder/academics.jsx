import React from 'react';
import NavArrows from '../../navArrows/navArrows';
import Footer from '../../footer/footer';
import ProfileTitle from '../../headings/ProfileTitle'
import Chart from '../../charts/chart';
import Section from '../../headings/section';
import logo from '../../../images/favprofs.svg'
import '../img.scss'

function Academics() {
    return (
        <div>
            <ProfileTitle section="academics" title="Academics" />
            <Section header="1A Class Average" description="The cohort finished with a high 80 average. Note: just under half the cohort responded about their average..." />
            <Chart type="Histogram" data="Average1A" position="left" />
            <Chart type="Stacked" data="Coop Round vs Job Sector" position="right" />
            <Section header="High School Programs and University Averages" description="Students who took IB in high school typically had higher averages in university." />
            <Chart type="Stacked" data="Coop Round vs Job Sector" position="center" />
            <Section header="Lecture Attendance" description="SYDE 111 had the highest number of attendees while SYDE 101 had the lowest." />
            <Chart type="Stacked" data="Coop Round vs Job Sector" position="left" />
            <Chart type="Stacked" data="LecturesAttendedByFormat" position="right" />
            <Section header="Course Difficulty, Usefulness, and Average" description="NEED TO COME UP WITH SUMN." />
            <Chart type="Scatter" data="Course Average vs Difficulty" position="center" />
            <Chart type="Scatter" data="Course Average vs Usefulness" position="center" />
            <Chart type="Scatter" data=" Course Usefulness vs Difficulty" position="center" />
            <Section header="Study Habits" description="Hopefully they improve by 1B." />
            <Chart type="Pie" data="StudyHabits" position="center" />
            <Section header="Favourite Professors" description="Our SYDE 181 professor (Nasmin Paryab) and SYDE 111 prodessor (Sean Speziale) were the most beloved by the cohort." />
            <img src={logo} alt="" className="bottom" />
            <NavArrows navBack="coop" navForward="demographics" />
            <Footer />
        </div>
    );
}

export default Academics;