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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
