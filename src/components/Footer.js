import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light  p-5">
      <div className = "row">

      <div className="col-md">

        <h6>Categories</h6>
        <ul className="list-group list-group-flush">
          <li className=" list-group-item  text-center position bg-transparent"><a className = " link-secondary" href=".">Pianos and Keyboards</a></li>
          <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Guitars and Bass</a></li>
          <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Strings</a></li>
          <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Percussion</a></li>
          <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Woodwinds</a></li>
          <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Brass</a></li>
          <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Listening</a></li>
          <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Auido Production</a></li>
          <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Brands</a></li>
        </ul>
      </div>

      <div className="col-md">

        <h6>For You</h6>
        <ul className="list-group list-group-flush">
        <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Account</a></li>
        <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Track Orders</a></li>
        <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Lorem Ipsum</a></li>
        <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Privacy Policy</a></li>

        </ul>
      </div>

      <div className="col-md">

        <h6>Contact Us</h6>
        <ul className="list-group list-group-flush">
        <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Email Us</a></li>
        <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">About Us</a></li>
        <li className=" list-group-item  text-center position bg-transparent"><a className = "link-secondary" href=".">Our Brands</a></li>
        </ul>

      </div>
      </div>
    </footer>
  )
}

export default Footer