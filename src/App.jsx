import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/main.css';
import Home from './components/Home';
import Showreel from './components/Demoreel';
import About from './components/About';
import Motion from './components/Motion';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demoreel" element={<Showreel />} />
        <Route path="/motion" element={<Motion />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
