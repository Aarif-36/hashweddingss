import React, { useState } from "react";
import Home from './pages/Home'
import About from './pages/About'
import Gall from './pages/Gall'
import Contact from './pages/Contact'
import Story from './pages/Story'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/gall' element={<Gall/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/story' element={<Story/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App