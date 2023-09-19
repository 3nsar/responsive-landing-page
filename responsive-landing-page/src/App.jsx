import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardSlider from './components/CardSlider'
import About from './components/About'
import Gallery from './components/Gallery'
import Product from './components/Product'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
      <Hero/>
      <CardSlider/>
      <About/>
      <Gallery/>
      <Route path='/product/:id' element={<Product/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App