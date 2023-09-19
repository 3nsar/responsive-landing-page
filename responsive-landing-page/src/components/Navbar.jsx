import React, { useContext, useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router'
import {motion} from "framer-motion"

const Navbar = () => {

  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate()


  const handleNavClick = () => {
    setShowNav(!showNav);
  };


  return (
  <div className="navbar-container ">

     <motion.div 
        initial={{opacity: 0, scale: 0, }}
        whileInView={{opacity: 1, scale: 1,}}
        transition={{duration: 0.7}}
        viewport={{once: true}}
        >
          <h1 onClick={()=>navigate('/')}>ART</h1> 
      </motion.div>

      <div className='nav-icon' onClick={handleNavClick}>
      {showNav ? <AiOutlineClose fontSize="25px"/> : <FaBars fontSize="25px"/>}
      </div>


      <ul className={`navbar-list ${showNav ? 'show' : ''}`}>
              <li onClick={()=>navigate('/')}>About</li>
              <li onClick={()=>navigate('/')}>Gallery</li>

      </ul>

    </div>
  )

}

export default Navbar