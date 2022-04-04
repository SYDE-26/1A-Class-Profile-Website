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
const BarGraph = dynamic(() => import('./components/charts/barGraph.jsx'));
 
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
          <Route path='/' element={<Navigation />} />
          {/* 
          <Route path='/academics' element={<Academics />} />
          <Route path='/coop' element={<Coop />} />
          <Route path='/demographics' element={<Demographics />} />
          <Route path='/highschool' element={<HighSchool />} />
          <Route path='/lifestyles' element={<Lifestyles />} />
          <Route path='/gallery' element={<PhotoGallery />} />
          */}
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