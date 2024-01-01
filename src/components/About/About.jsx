import React from 'react'
import "./About.css"
import mypic from "../../assets/backre.png"
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolder2 } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";



const About = () => {
  return (
    <section id='about'>
         <h5>Get To Know</h5>
         <h2>About Me</h2>
         <div className='container about_container'>
           <div className='about_me'>
               <div className="about_me-image">
                  <img src={mypic} alt='about Image'/>
               </div>
           </div>

           <div className='about_content'>
           <div className="about_cards">
                        <article className='about_card'>
                          <FaAward className='about-icon'/>
                          <h5>Experience</h5>
                          <small> 0+ Years Working</small>
                        </article>

                        <article className='about_card'>
                          <MdCastForEducation className='about-icon'/>
                          <h5>Education</h5>
                          <small>AAU CS student</small>
                        </article>

                        <article className='about_card'>
                          <BsFolder2 className='about-icon'/>
                          <h5>ProJect</h5>
                          <small> 10+ completed project</small>
                        </article>
                    </div>
                    <p>
                    Enrolled in Addis Ababa University's Computer Science Department in 2022. Completed two intensive full-stack web development boot camps with Evangadi and MiT institutions. Concurrently pursuing a management degree at Saint Mary School, actively building a robust foundation in the technology field.
                    </p>
                    <a href="#contact" className='btn btn-primary'> Let's talk</a>
             </div>
         </div>
    </section>
  )
}

export default About
