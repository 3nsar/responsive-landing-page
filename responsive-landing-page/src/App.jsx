import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardSlider from './components/CardSlider'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <CardSlider/>
    </div>
  )
}

export default App