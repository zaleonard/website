import { useState } from 'react'
import './css/App.css'
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import AboutMe from "./pages/AboutMe"




function App() {


  return (<>
    <NavBar />
    <main className = "main-content">
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/aboutme' element={<AboutMe />} />
      </Routes>
  </main>
  </>
  );
}

export default App

