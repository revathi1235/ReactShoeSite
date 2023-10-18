import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBars from './components1/Nav';
// import Homepage from './components1/Homepage';
// import Pricingpage from './components1/Pricingpage';
// import Hero from "./components1/Hero";
// import Footer from './components1/Footer';
import Featurespage from './components1/Featurespage';
function App() {
  return (
    <Router>
      <div>
        <NavBars />
        <Routes>
          {/* <Route path="/home" element={<Homepage />} /> */}
          <Route path="/features" element={<Featurespage />} />
          <Route path="/price" element={<Pricingpage />} />
        </Routes>
      <Hero/> 
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
