import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Nav />
       <Routes>
        <Route exact path="/about" element={ <About />} />
        <Route exact path="/shop" element={ <Shop />} />
        <Route exact path="/login" element={ <Login /> } />
       </Routes> 
     </div> 
    </BrowserRouter>
  );
}

export default App;
