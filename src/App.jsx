import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Competences from './pages/Competences'
import Projets from './pages/Projets'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/apropos' element={<Apropos/>}/>
        <Route path='/competences' element={<Competences/>}/>
        <Route path='/projets' element={<Projets/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
