import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar';
import Overlay from './components/overlay';
import dynamic from 'next/dynamic';
//pages
import Navigation from './components/navigation/index';
import Academics from './pages/academics';
import Coop from './pages/coop';
import Demographics from './pages/demographics';
import HighSchool from './pages/highschool';
import Lifestyles from './pages/lifestyles';
import PhotoGallery from './pages/photoGallery';
import Insyder from './pages/insyderPage';
//const BarGraph = dynamic(() => import('./components/charts/barGraph.jsx'));
//const ScatterPlot = dynamic(() => import('./components/charts/scatterPlot.jsx'));
//const StackedBar = dynamic(() => import('./components/charts/stackedBar.jsx'));
// const HistogramCount = dynamic(() =>
//   import('./components/charts/histogramChart.jsx').then(
//     (mod) => mod.HistogramCount
//   )
// );
// const PieChart = dynamic(() => import('./components/charts/pieGraph.jsx'));
const BoxPlot = dynamic(() => import('./components/charts/boxPlotChart.jsx'));

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
          <Route path='/academics' element={<Academics />} />
          <Route path='/coop' element={<Coop />} />
          <Route path='/demographics' element={<Demographics />} />
          <Route path='/highschool' element={<HighSchool />} />
          <Route path='/lifestyles' element={<Lifestyles />} />
          <Route path='/gallery' element={<PhotoGallery />} />
        </Routes>
      </Router>
      <Footer navBack="Go back" navForward="Go forward" />
    </div>
  );
}
*/
 
export default App;