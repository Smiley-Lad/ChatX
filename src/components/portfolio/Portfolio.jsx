import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id='projects'>
      <h5 id='head'>My Recent Work</h5>
      <h2 id='head'>Projects</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG1} alt="" />
          </div>
          <h3>Web 3 Based Crowdfund</h3>
          <div className="portfolio_cta">
            <a href="https://github.com/Smiley-Lad/web3-crowdFunding.git" className='btn' target='_blank'>Github</a>
            <a href="https://shimmering-fudge-afe8d3.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG2} alt="" />
          </div>
          <h3>General Statistics</h3>
          <div className="portfolio_cta">
            <a href="https://github.com/Smiley-Lad/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG3} alt="" />
          </div>
          <h3>Crypto App</h3>
          <div className="portfolio_cta">
            <a href="https://github.com/Smiley-Lad/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG4} alt="" />
          </div>
          <h3>Finance App</h3>
          <div className="portfolio_cta">
            <a href="https://github.com/Smiley-Lad/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG5} alt="" />
          </div>
          <h3>Data Visualization</h3>
          <div className="portfolio_cta">
            <a href="https://github.com/Smiley-Lad/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG6} alt="" />
          </div>
          <h3>Expenses Tracker</h3>
          <div className="portfolio_cta">
            <a href="https://github.com/Smiley-Lad/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;