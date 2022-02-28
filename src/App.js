import React from 'react';

import './style.css';
import {Routes, Route} from "react-router-dom"

import Navbar from "./Navbar/Navbar.js";
import Template from "./body/template";
import Home from "./body/home"


function App() {

  return (
    <div className="container">
      <Navbar />
      
      <Routes>
          <Route exact path="/BreadLife" element={<Home />} />   
          <Route exact path="/BreadLife/recipe" element={<Template />} /> 
      </Routes>
    </div>
  );
}

export default App;
