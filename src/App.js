import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Footer from './components/Footer/Footer';

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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}/>
      </Routes>
    </Router>
  );
}


// function App() {
//   return (
    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
        
//         {/* <BarGraph datatype="Drugs"  width = {950} height ={550} />  */}
//         {/* <ScatterPlot datatype="Course Average vs Difficulty"/> */}
//         {/* <StackedBar datatype="Coop Round vs Job Sector" /> */}
//         {/* <HistogramCount datatype="Admission Average Drop Off"/> */}
//         {/* <PieChart datatype="Parents Born" /> */}
//         {/* <BoxPlot datatype="SYDE 121 Average vs Software Coop" /> */}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
