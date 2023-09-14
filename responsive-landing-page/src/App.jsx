import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardSlider from './components/CardSlider'
import About from './components/About'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <CardSlider/>
      <About/>
    </div>
  )
}

export default App