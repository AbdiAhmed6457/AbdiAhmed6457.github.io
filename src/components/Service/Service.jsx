import React from 'react'
import "./Service.css"
import { MdOutlineCheck } from "react-icons/md";

const Service = () => {
  return (
   <section id='service'>
     <h5> What I Offer</h5>
     <h2>Services</h2>
     <div className="  container services-container">
       <article className='service'>
         <div className='service_head'>
          <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
               
              <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>Conducting user research to understand the target audience, their needs, and preferences</p>
              </li>
              {/* <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>Developing sitemaps, wireframes, and user flow diagrams to ensure a logical and user-friendly website structure</p>
              </li> */}
              <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>Crafting visually appealing designs that align with the brand identity and target audience</p>
              </li>
              {/* <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>conduct usability testing sessions to evaluate the effectiveness and ease of use of the website</p>
              </li> */}
             
          </ul>
       </article>

       <article className='service'>
         <div className='service_head'>
          <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
               
              <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>Creating visually appealing and interactive user interfaces</p>
              </li>
              <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>building the server-side logic and functionality that powers the website </p>
              </li>
              <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>designing and manage the database structure, ensuring efficient storage and retrieval of data</p>
              </li>
              <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>Deploying websites to hosting platforms, continuous monitor and optimization</p>
              </li>
              {/* <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>Lorem ipsum erel assh dekemegn mn uishalal uuf malli maali</p>
              </li> */}
              
          </ul>
       </article>


       <article className='service'>
         <div className='service_head'>
          <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
               
              <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p> Developing a content strategy aligned with the website's goals and target audience</p>
              </li>
              <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>writing compelling and engaging copy that conveys the brand message and captivates the website visitors</p>
              </li>
              <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>Organizing and manage the website's content, ensuring it is regularly updated</p>
              </li>
              {/* <li>
                 <MdOutlineCheck className='service_list-icon'/>
                 <p>Lorem ipsum erel assh dekemegn mn uishalal uuf malli maali</p>
              </li> */}
             
          </ul>
       </article>
     </div>
   </section>
  )
}

export default Service
