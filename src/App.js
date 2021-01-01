import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Namelist from './Components/pages/Namelist/Namelist'
import './App.css';
import Header from './Components/Headrbar/Header';
import Home from './Components/pages/Home/Home';
import About from './Components/pages/About/About';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Route path="/">
      <Home />
      </Route>
      <Route path="/about"><About /></Route>
      <Route path="/namelist"><Namelist /></Route>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
