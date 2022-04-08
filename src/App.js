import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Footer from './components/footer/footer';
import Navbar from './components/navbar';
import Overlay from './components/overlay';
import dynamic from 'next/dynamic';
import Navigation from './components/navigation/index';
import Coop from './components/profilePages/coopFolder/coop';
import Academics from './components/profilePages/academicFolder/academics';
import Demographics from './components/profilePages/demographicsFolder/demographics';
import Highschool from './components/profilePages/highschoolFolder/highschool';
import Lifestyles from './components/profilePages/lifestyleFolder/lifestyles';
import About from './components/profilePages/aboutFolder/about';
import PhotoPage from './components/profilePages/photoGalleryFolder/photoGallery';
import InsyderPage from './components/profilePages/insyderFolder/insyderPage';
//const BarGraph = dynamic(() => import('./components/charts/barGraph.jsx'));
//const ScatterPlot = dynamic(() => import('./components/charts/scatterPlot.jsx'));
//const StackedBar = dynamic(() => import('./components/charts/stackedBar.jsx'));
// const HistogramCount = dynamic(() =>
//   import('./components/charts/histogramChart.jsx').then(
//     (mod) => mod.HistogramCount
//   )
// );
//const PieChart = dynamic(() => import('./components/charts/pieGraph.jsx'));
// const BoxPlot = dynamic(() => import('./components/charts/boxPlotChart.jsx'));

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div>
      <Router>
        <Overlay
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
        <Navbar
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/coop" element={<Coop />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/demographics" element={<Demographics />} />
          <Route path="/highschool" element={<Highschool />} />
          <Route path="/lifestyles" element={<Lifestyles />} />
          <Route path="/about" element={<About />} />
          <Route path="/photoGallery" element={<PhotoPage />} />
          <Route path="/insyderPage" element={<InsyderPage />} />
        </Routes>
      </Router>
    </div>
    
  );
}

/*
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigation />} />
        </Routes>
      </Router>
      <Footer navBack="Go back" navForward="Go forward" />
    </div>
  );
}
*/

export default App;