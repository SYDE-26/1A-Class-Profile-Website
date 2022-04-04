import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Footer from './components/footer/footer';
import Navbar from './components/navbar';
import Overlay from './components/overlay';
import dynamic from 'next/dynamic';
import Navigation from '../src/components/navigation/index';
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
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </Router>
    </div>
  );
}

/*
function App() {
  return (
    <div>
      <Footer navBack="Go back" navForward="Go forward" />
    </div>
  );
}
*/

export default App;
