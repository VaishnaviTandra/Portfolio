import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Experiences from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'

function RootLayout() {
  return (
    <div>
        <Header/>
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Education/>
             <Experiences/>
            <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout