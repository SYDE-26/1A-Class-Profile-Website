import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Overlay from './components/overlay';
import InsyderOverlay from './components/insyderOverlay';
// import dynamic from 'next/dynamic';
import Navigation from './components/navigation/index';
import Coop from './components/profilePages/coopFolder/coop';
import Academics from './components/profilePages/academicFolder/academics';
import Demographics from './components/profilePages/demographicsFolder/demographics';
import Highschool from './components/profilePages/highschoolFolder/highschool';
import Lifestyles from './components/profilePages/lifestyleFolder/lifestyles';
import About from './components/profilePages/aboutFolder/about';
import PhotoPage from './components/profilePages/photoGalleryFolder/photoGallery';
import InsyderPage from './components/profilePages/insyderFolder/insyderPage';


function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showInsyderOverlay, setShowInsyderOverlay] = useState(false);
  return (
    <div>
      <Router>
        <Navbar
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
         <InsyderOverlay
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
          showInsyderOverlay={showInsyderOverlay}
          setShowInsyderOverlay={setShowInsyderOverlay}
        />
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/coop" element={<Coop />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/demographics" element={<Demographics />} />
          <Route path="/highschool" element={<Highschool />} />
          <Route path="/lifestyles" element={<Lifestyles />} />
          <Route path="/about" element={<About />} />
          <Route path="/photoGallery" element={<PhotoPage />} />
          <Route path="/insyderPage" element={<InsyderPage showInsyderOverlay={showInsyderOverlay} setShowInsyderOverlay={setShowInsyderOverlay} />} />
        </Routes>
        <Overlay
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
      </Router>

    </div>

  );
}

export default App;