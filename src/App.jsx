import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
import Error from './components/error/Error'
import {about, projects, contact,home} from './routes/Path'
import useStore from './store/useStore';
import Footer from './components/Footer'


function App() {
  
 const darkMode = useStore((state) => state.darkMode);
  return (
    <div className={`app ${darkMode ? 'App dark' : 'App light'}`}>
 
      <BrowserRouter>
        <div className="main-content">
          <Routes>
            <Route path={home} element={<Home />} />
            <Route path={about} element={<AboutMe />} />
            <Route path={projects} element={<Projects />} />
            <Route path={contact} element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
