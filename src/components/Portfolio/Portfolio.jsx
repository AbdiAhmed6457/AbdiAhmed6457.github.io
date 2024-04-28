import React from 'react'
import "./Portfolio.css"
import IMG1 from '../../assets/amazonClone.png'
import IMG2 from '../../assets/portfimg.png'
import IMG3 from '../../assets/socialPic.png'
import IMG4 from '../../assets/emailcol.png'
import IMG5 from '../../assets/netflexClone.png'
import IMG7 from '../../assets/blog.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG1} alt=''/>
          </div>
          <h3>Amazon Clone</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/AbdiAhmed6457/amazonClone.git ' target='_blank' className='btn'>Github</a>
            <a href='https://clone-ad6ec.web.app/'  className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG2} alt=''/>
          </div>
          <h3>Personal Portfolio</h3>
          <div className="portfolio_item-cta">
            <a href='###' target='_blank' className='btn'>Github</a>
            <a href='###' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG3} alt=''/>
          </div>
          <h3>Full-Stack Social-media</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/AbdiAhmed6457/AbdiAhmed6457.github.io-newSocialApp.git ' target='_blank' className='btn'>Github</a>
            <a href='#'  className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG4} alt=''/>
          </div>
          <h3>Email collection with MailChimp</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/AbdiAhmed6457/email.git ' target='_blank' className='btn'>Github</a>
            <a href='https://fluffy-cod-overshirt.cyclic.app' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG5} alt=''/>
          </div>
          <h3>Netflix clone</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/AbdiAhmed6457/netFlixClone.git ' target='_blank' className='btn'>Github</a>
            <a href='https://netflix-clone-d2edd.web.app/' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG7} alt=''/>
          </div>
          <h3>This is full-stack working blog project</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/AbdiAhmed6457/BlogProject.git' target='_blank' className='btn'>Github</a>
            <a href='https://abudi-blogs.onrender.com' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
      </div>
    </section>
  )
}

export default Portfolio
