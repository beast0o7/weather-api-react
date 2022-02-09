import './App.css';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import Footer from './components/Footer';

import React, { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

function App() {
  const [query, setQuery] = useState("");
  

  return (<>

    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Weather query={query} setQuery={setQuery}/>}></Route>
    <Route exact path="/About" element={<About/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
