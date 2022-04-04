import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Footer from './components/footer/footer';
import Navbar from './components/navbar';
import Overlay from './components/overlay';
import dynamic from 'next/dynamic';
import Navigation from './components/navigation/index';
import Coop from './pages/coopFolder/coop';
import Academics from './pages/academicFolder/academics';
import Demographics from './pages/demographicsFolder/demographics';
import Highschool from './pages/highschoolFolder/highschool';
import Lifestyles from './pages/lifestyleFolder/lifestyles';
import About from './pages/aboutFolder/about';
import PhotoPage from './pages/photoGalleryFolder/photoGallery';
import InsyderPage from './pages/insyderFolder/insyderPage';
//const BarGraph = dynamic(() => import('./components/charts/barGraph.jsx'));
//const ScatterPlot = dynamic(() => import('./components/charts/scatterPlot.jsx'));
//const StackedBar = dynamic(() => import('./components/charts/stackedBar.jsx'));
// const HistogramCount = dynamic(() =>
//   import('./components/charts/histogramChart.jsx').then(
//     (mod) => mod.HistogramCount
//   )
// );
// const PieChart = dynamic(() => import('./components/charts/pieGraph.jsx'));
// const BoxPlot = dynamic(() => import('./components/charts/boxPlotChart.jsx'));

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div>
      <Navbar
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
      <Overlay
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/pages/coop" element={<Coop />} />
          <Route path="/pages/academics" element={<Academics />} />
          <Route path="/pages/demographics" element={<Demographics />} />
          <Route path="/pages/highschool" element={<Highschool />} />
          <Route path="/pages/lifestyles" element={<Lifestyles />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/photoGallery" element={<PhotoPage />} />
          <Route path="/pages/insyderPage" element={<InsyderPage />} />
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