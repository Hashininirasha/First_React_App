import React,{Component} from 'react';
import Namelist from './Components/pages/Namelist/Namelist'
import './App.css';
import Header from './Components/Headrbar/Header';

function App() {
  return (
    <div>
      <Header />
      <Namelist />
    </div>
  );
}

export default App;
