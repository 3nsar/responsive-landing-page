import React from 'react'
import robot from '../assets/robot1.jpg'
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div className='hero-container'>
      
      <motion.div className="hero-text" 
        
        initial={{opacity: 0, scale: 0, x: 400}}
        whileInView={{opacity: 1, scale: 1, x:0}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        >
          <h1>THIS IS THE ART MARKET, HAVE SOME FUN! </h1> 
    
       </motion.div>
        
        <div className="hero-btns">
            <button>ABOUT</button>
            <button>COLLECTION</button>
        </div>
    </div>
  )
}

export default Hero