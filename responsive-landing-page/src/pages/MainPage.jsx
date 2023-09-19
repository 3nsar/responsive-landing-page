import React from 'react'
import Hero from '../components/Hero'
import CardSlider from '../components/CardSlider'
import About from '../components/About'
import Gallery from '../components/Gallery'


const MainPage = () => {
  return (
    <div>
        <Hero/>
        <CardSlider/>
        <About/>
        <Gallery/>
        
    </div>
  )
}

export default MainPage