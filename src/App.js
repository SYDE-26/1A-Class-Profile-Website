import React from 'react'
import logo from './logo.svg';
import Footer from './components/Footer/Footer';

import dynamic from 'next/dynamic';
// const BoxPlot = dynamic(() => import('./components/charts/boxPlotChart.jsx'));
// const BarGraph = dynamic(() => import('./components/charts/barGraph.jsx'));


function App() {
  return (
    <Footer navBack="Go back" navForward="Go forward" />
  );
}

export default App;
