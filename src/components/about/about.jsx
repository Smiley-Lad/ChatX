import React from 'react';
import './about.css';
import ME from '../../assets/aboutpic.jpg';
import { FaAward } from 'react-icons/fa';
import { BiSolidBriefcaseAlt2 } from 'react-icons/bi';
import { VscFolderActive } from 'react-icons/vsc';

const about = () => {
  return (
    <section id='about'>
      <h5 id='head'>Get To Know</h5>
      <h2 id='head'>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About mage" />
          </div>  
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about_card'>
              <BiSolidBriefcaseAlt2 className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Year Experience</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Education</h5>
              <small>B.Sc Electronics</small>
            </article>

            <article className='about_card'>
              <VscFolderActive className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. 
          My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do. 
          I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn all that I can about development. 
          While a student at KGISL Institute of Technology under Bharathiar University, I studied Electronics, and I believe that my understanding of problem solving and complex algorithms are also skills that have and will continue to contribute to my overall success as a developer.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;