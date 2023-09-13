import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Cards/>
    </div>
  )
}

export default App