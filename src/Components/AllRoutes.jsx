import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from '../Pages/Contact'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

    </div>
  )
}

export default AllRoutes