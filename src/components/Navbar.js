import React from 'react'

const Navbar = () => {
  return (
    <div>

      <div className = " d-flex justify-content-between pt-2">
        <h1 className = "ms-2">OurSong</h1>
        <form className = "form-inline d-flex">
        
          <input className = "form-control me-2"/>
          <button className = "btn btn-outline-primary me-2 w-25"></button>
      
        </form>
        </div>
   
        <ul className = "nav navbar">
            <li className = "nav-item"><a className = "nav-link" href = "/">Deals</a> </li>
            <li className = "nav-item"><a  className = "nav-link" href = "/">Categories</a> </li>
            <li className = "nav-item"><a  className = "nav-link" href = "/">Brands</a> </li>
            <li className = "nav-item"><a  className = "nav-link" href = "/">Track Order</a> </li>
        </ul> 
        </div>
    
  )}
  

export default Navbar