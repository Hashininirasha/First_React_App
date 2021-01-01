import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Namelist from './Components/pages/Namelist/Namelist'
import './App.css';
import Header from './Components/Headrbar/Header';
import Home from './Components/pages/Home/Home';
import About from './Components/pages/About/About';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Namelist />
    </div>
  );
}

export default App;
