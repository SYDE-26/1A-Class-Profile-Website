import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Footer from './components/Footer/Footer';

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
    <div>
      <Footer navBack="Go back" navForward="Go forward" />
    </div>
  );
}
*/

export default App;
