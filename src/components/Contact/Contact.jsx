import React, { useRef } from 'react'
import "./Contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5yy1o2o', 'template_3rdsq57', form.current, 'mRdUYyLdRwJ_Wtf5c')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

       <div className="contact_container container">
          <div className="contact_options">
            <article className='contact_option'>
               <MdOutlineEmail className='contact_option-icon'/>
               <h4>Email</h4>
               {/* <h5>abudiahmed2007@gamil.com</h5> */}
               <a href="mailto:abudiahmed2007@gamil.com" target='_blanck' >Send a message</a>
            </article>
            <article className='contact_option'>
               <RiMessengerLine className='contact_option-icon'/>
               <h4>Messenger</h4>
               <h5>Abudi Ahmed</h5>
               <a href="https://www.facebook.com/profile.php?id=61550730331274&mibextid=vk8aRt" target='_blanck'>Send a message</a>
            </article>
            <article className='contact_option'>
               <FaTelegram className='contact_option-icon'/>
               <h4>Telegram</h4>
               <h5>Aidb</h5>
               <a href="https://t.me/Hereafter2" target='_blanck'>Send a message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
             <input type='text' name='name' placeholder='Your Full Name' required/>
             <input type = 'text' name = 'email' placeholder='Your Email' required/>
             <textarea name='message'  rows= '7' placeholder='Your Message' required></textarea>
             <button type='submit' className='btn btn-primary '>Send Message</button>
          </form>

       </div>
    </section>
  )
}

export default Contact
