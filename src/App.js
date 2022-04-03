import React, {useState} from 'react'
import logo from './logo.svg';
import Navbar from './components/navigation';
import Overlay from './components/overlay';
// import Footer from './components/Footer/Footer';

// import dynamic from 'next/dynamic';
// const BoxPlot = dynamic(() => import('./components/charts/boxPlotChart.jsx'));
// const BarGraph = dynamic(() => import('./components/charts/barGraph.jsx'));


function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  function toggleOverlay() {
    setShowOverlay(prev => !prev)
  }

  return (
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
  );
}

export default App;
