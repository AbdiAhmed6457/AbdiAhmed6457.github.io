import React from 'react'
import "./Experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have </h5>
      <h2>My Experiences</h2>

      <div className='container experience_container'>

      <div className="experience_fronend">
         <h3>Frontend Development</h3>
            <div className="experience_content">

                <article className='experienced_details'>
                       <BsFillPatchCheckFill className = 'experience_details-icon'/>
                      <div>
                        <h4>HTML</h4>
                        <small className= 'text-light'>Experienced</small>
                      </div>
                </article>
                <article className='experienced_details'>
                      <BsFillPatchCheckFill className = 'experience_details-icon'/>
                       <div>
                        <h4>CSS</h4>
                        <small className= 'text-light'>Experienced</small>
                       </div>
                </article>
                <article className='experienced_details'>
                      <BsFillPatchCheckFill className = 'experience_details-icon'/>
                      <div>
                        <h4>JavaScript</h4>
                        <small className= 'text-light'>Experienced</small>
                      </div>
                </article>
                <article className='experienced_details'>
                      <BsFillPatchCheckFill className = 'experience_details-icon'/>
                      <div>
                        <h4>React</h4>
                        <small className= 'text-light'>Experienced</small>
                      </div>
                </article>
                <article className ='experienced_details'>
                      <BsFillPatchCheckFill className = 'experience_details-icon'/>
                      <div>
                        <h4>Next.js</h4>
                        <small className= 'text-light'>Intermediate</small>
                      </div>
                </article>
            </div>

      </div>

      <div className='experience_backend'>
       <h3>Backend Development</h3>
        <div className="experience_content">

         <article className='experienced_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className= 'text-light'>experienced</small>
              </div>
         </article>
         <article className='experienced_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className= 'text-light'>experienced</small>
              </div>
         </article>
         <article className='experienced_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className= 'text-light'>intermediate</small>
              </div>
         </article>
         <article className='experienced_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon'/>
              <div>
                <h4>PostGres</h4>
                <small className= 'text-light'>Experienced</small>
              </div>
         </article>
         <article className='experienced_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon'/>
              <div>           
                <h4>python</h4>
                <small className= 'text-light'>Basic</small>
              </div>
         </article>
         </div>

      </div>
      </div>
    </section>
  )
}

export default Experience
