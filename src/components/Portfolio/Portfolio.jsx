import React from 'react'
import "./Portfolio.css"
import IMG1 from '../../assets/jima-pic.jpg'
import IMG2 from '../../assets/portfimg.png'
import IMG3 from '../../assets/jima-pic.jpg'
import IMG4 from '../../assets/divepic.jpg'
import IMG5 from '../../assets/corepic.jpg'
import IMG6 from '../../assets/backpic.jpg'

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
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/AbdiAhmed6457/email.git ' target='_blank' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/23279428-Caleido-Finance-UX-UI-design'  className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG2} alt=''/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href='###' target='_blank' className='btn'>Github</a>
            <a href='###' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG3} alt=''/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/AbdiAhmed6457/email.git ' target='_blank' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/23279428-Caleido-Finance-UX-UI-design' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG4} alt=''/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/AbdiAhmed6457/email.git ' target='_blank' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/23279428-Caleido-Finance-UX-UI-design' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG5} alt=''/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/AbdiAhmed6457/email.git ' target='_blank' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/23279428-Caleido-Finance-UX-UI-design' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
             <img src={IMG6} alt=''/>
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com/AbdiAhmed6457/email.git ' target='_blank' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/23279428-Caleido-Finance-UX-UI-design' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> 
      </div>
    </section>
  )
}

export default Portfolio
