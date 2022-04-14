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
            <Section header="1A Class Average" description="The cohort finished with a high 80 average, with the help of online schooling. Note: just under half the cohort responded about their average..." />
            <Chart type="Histogram" data="Average1A" position="left" />
            <Chart type="Box" data="courseAverageDistribution" position="right" />
            <Section header="High School Programs and University Averages" description="Students who took IB in high school typically had higher averages in university. What doesn't kill you makes you stronger 😢" />
            <Chart type="Box" data="enrichmentVSUniAverage" position="center" />
            <Section header="Lecture Attendance" description="SYDE 111 had the highest number of attendees while SYDE 101 had the lowest. Sorry Dr. Mercer, it's not personal." />
            <Chart type="Box" data="lectureAttendedVSClass" position="left" />
            <Chart type="Stacked" data="LecturesAttendedByFormat" position="right" />
            <Section header="Course Difficulty, Usefulness, and Average" description="We're trying to justify to ourselves why we're paying 17.5k a year." />
            <Chart type="Scatter" data="Course Average vs Difficulty" position="center" />
            <Chart type="Scatter" data="Course Average vs Usefulness" position="center" />
            <Chart type="Scatter" data=" Course Usefulness vs Difficulty" position="center" />
            <Section header="Study Habits" description="...hopefully they improve by 2A. Third time's the charm!" />
            <Chart type="Pie" data="StudyHabits" position="center" />
            <Section header="Favourite Professors" description="We loved them all equally! Just with varying levels of equality..." />
            <img src={logo} alt="" className="bottom" />
            <NavArrows navBack="coop" navForward="demographics" />
            <Footer />
        </div>
    );
}

export default Academics;