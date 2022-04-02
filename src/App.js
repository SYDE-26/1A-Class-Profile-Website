import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import dynamic from 'next/dynamic';
import Navigation from '../src/components/navigation/index';
const BarGraph = dynamic(() => import('./components/charts/barGraph.jsx'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}/>
      </Routes>
    </Router>
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
