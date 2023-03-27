import {useLayoutEffect, useRef} from 'react'
import Navbar from './Navbar';
import piano from '../imgs/hero_image.PNG'
import gsap from 'gsap'


const Hero = () => {
  
  const imageRef = useRef()
  useLayoutEffect(() => {
    gsap.to(imageRef.current,{
      duration:3,
      opacity:1
    })
  }, []);
  return (
    <header className = "hero-section bg-secondary">
        <Navbar></Navbar>
        <div className = "d-flex justify-content-around">
        <div>

        <h2 className = "mt-5 ms-2 text-primary" >For All Things <div className = "ms-5"> Instrumental</div></h2>
        <button className = 'browse-button btn btn-primary mt-5 ms-4'>Browse &gt;</button>
        </div>
        <img src = {piano} alt = "" style={{opacity:0}} width='45%' ref = {imageRef}></img>
        </div>
        
    </header>
  )
}

export default Hero