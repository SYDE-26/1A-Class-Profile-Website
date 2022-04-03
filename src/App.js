<<<<<<< HEAD
import React, {useState} from 'react'
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> 4a220a91bf16e9f3bd60ec1c47d97ad7c0b0481e
import logo from './logo.svg';
import Navbar from './components/navigation';
import Overlay from './components/overlay';
// import Footer from './components/Footer/Footer';

<<<<<<< HEAD
// import dynamic from 'next/dynamic';
// const BoxPlot = dynamic(() => import('./components/charts/boxPlotChart.jsx'));
// const BarGraph = dynamic(() => import('./components/charts/barGraph.jsx'));

=======
import dynamic from 'next/dynamic';
import Navigation from '../src/components/navigation/index';
const BarGraph = dynamic(() => import('./components/charts/barGraph.jsx'));
>>>>>>> 4a220a91bf16e9f3bd60ec1c47d97ad7c0b0481e

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  function toggleOverlay() {
    setShowOverlay(prev => !prev)
  }

  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar 
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <BoxPlot datatype="SYDE 121 Average vs Software Coop"  width={400} height={450}/> */}
      </header>
      <Overlay />
    </div>
    // <Footer navBack="Go back" navForward="Go forward" />
=======
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}/>
      </Routes>
    </Router>
>>>>>>> 4a220a91bf16e9f3bd60ec1c47d97ad7c0b0481e
  );
}

/*
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <BarGraph datatype="Drugs"  width = {950} height ={550} /> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
