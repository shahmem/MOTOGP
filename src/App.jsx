import React from 'react'
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Works from './pages/Works'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/works' element={<Works />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App