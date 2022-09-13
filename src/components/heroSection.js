import React from 'react'
import { Button } from './Button'
import '../App.css'
import './heroSection.css'

function heroSection() {
  return (
    <div className='hero-container'>
      {/* <video src= "../../pubic/videos/video-2.mp4" autoPlay loop muted /> */}
      <video src='../../public/videos/video-2.mp4' autoPlay loop muted />
      <h1>Connecting dots over the world</h1>
      <p>Catch us along the way</p>
      <div className="hero-btns">
       <Button 
       className='btns'
       buttonSize='btn--large'
       buttonStyle='btn--outline'>
        GET STARTED
       </Button>
       <Button 
       className='btns'
       buttonSize='btn--large'
       buttonStyle='btn--primary'>
        Hi <i className='far fa-play-circle' />
       </Button>
      </div>
    </div>
  )
}
 
export default heroSection
