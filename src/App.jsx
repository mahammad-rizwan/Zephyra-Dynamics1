import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import TechnologyPage from './TechnologyPage.jsx';
import Careers from './Careers.jsx';
import NavBar from './NavBar.jsx'; 
import Footer from './Footer.jsx';

function App() {
  return (
    <div>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;