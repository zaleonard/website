import { useState } from 'react'
import './css/App.css'
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Homescreen"
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import AboutMe from "./pages/AboutMe"




function App() {


  return (<>
    <NavBar />
    <main className = "App">
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/aboutme' element={<AboutMe />} />
      </Routes>
  </main>
  </>
  );
}

export default App

