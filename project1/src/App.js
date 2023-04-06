import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Experience from './pages/Experience';
import './App.css';

function App() {
  return (
    <div className="App">

     <Navbar/>
     <Routes>

      <Route path = "Aboutus" element ={<Aboutus/>}/>
      <Route path = "Qualification" element ={<Qualification/>}/>
      <Route path = "Skills" element ={<Skills/>}/>
      <Route path = "Hobbies" element ={<Hobbies/>}/>
      <Route path = "Experience" element ={<Experience/>}/>

     </Routes>
    </div>
  );
}

export default App;
