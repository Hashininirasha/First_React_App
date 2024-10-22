import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Namelist from './Components/pages/Namelist/Namelist'
import './App.css';
import Header from './Components/Headrbar/Header';
import Home from './Components/pages/Home/Home';
import About from './Components/pages/About/About';
import Namelistc from './Components/pages/Namelistc/Namelistc';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
    <Switch>
     
      <Route path="/about"><About /></Route>
      <Route path="/namelist"><Namelist /></Route>
      <Route path="/namelistc"><Namelistc/></Route>
      <Route path="/">
      <Home />
      </Route>
    </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
