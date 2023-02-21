import React from 'react'
import Navbar from './Navbar';
import piano from '../imgs/hero_image.PNG'


const Hero = () => {

  return (
    <header className = "hero-section bg-secondary">
        <Navbar></Navbar>
        <div className = "d-flex justify-content-around">
        <div>

        <h2 className = "mt-5 ms-2 text-primary" >For All Things <div className = "ms-5"> Instrumental</div></h2>
        <button className = 'btn btn-primary mt-5 ms-4'>Browse &gt;</button>
        </div>
        <img src = {piano} alt = "" width='45%'></img>
        </div>
        
    </header>
  )
}

export default Hero