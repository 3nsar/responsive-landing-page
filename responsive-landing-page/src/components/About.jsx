import React from 'react'
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className='about-container'>
       <motion.div 
        
        initial={{opacity: 0, scale: 0, x: 400}}
        whileInView={{opacity: 1, scale: 1, x:0}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        >
          <h1>ABOUT </h1> 
    
       </motion.div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero beatae delectus culpa. Molestiae aliquam velit quasi modi ut consequatur vel, asperiores possimus consectetur delectus tempora repellendus temporibus distinctio facere.</p>
    </div>
  )
}

export default About