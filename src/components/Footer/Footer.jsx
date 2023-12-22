import React from 'react'
import "./Footer.css"
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
       <footer> 
          <a href="#" className='footer_logo'>  ABUDI</a>
          <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experiene">Experience</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer_socials">
             <li><a href="https/facebook.com"><FaFacebookF/></a></li>
             <li><a href="https/linkdin.com"><FaLinkedin/></a></li>
             <li><a href="https/telegram"><FaTelegramPlane/></a></li>
          </div>
          <div className="footer_copyright">
             <small>&copy; Abudi Ahmed. All right reserved</small>
          </div>
       </footer>
  )
}

export default Footer
