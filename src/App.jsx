import React, { useState } from 'react'
import "./assets/css/index.css"
import Hero from './pages/Hero/Hero';
import Skills from './pages/Skills/Skills';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Header from './pages/Header/Header';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  const [isOnePage, setIsOnePage] = useState(false); 
  return (
    <>
    <Header/>
   {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <Skills />
          <Education />
          <Contact />
          <Projects />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>`
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  )
}

export default App