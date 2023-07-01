import React from 'react'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import GithubCalendar from '../Components/Githubcalender'
import About from './About'
import Contact from './Contact'
import Footer  from '../Components/Footer'

function Home() {
  return (
    <div id="home">
      <Hero />
      <Projects />
      <Skills />
      <GithubCalendar />
      <Footer />
    </div>
  )
}

export default Home