import React from 'react'
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';

import dynamic from 'next/dynamic';
// const BoxPlot = dynamic(() => import('./components/charts/boxPlotChart.jsx'));
// const BarGraph = dynamic(() => import('./components/charts/barGraph.jsx'));


function App() {
  return (
    <div className="App">
      <Footer navBack="Go back" navForward="Go forward" />
    </div>
  );
}

export default App;
