import React from 'react'
import robot from '../assets/robot1.jpg'

const Cards = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img src={robot} alt="Image Alt Text" />
        <p>This is the content of the card.</p>
      </div>
    </div>
  )
}

export default Cards