import React from 'react';
import './experience.css';
import { MdVerified } from 'react-icons/md'

const experience = () => {
  return (
    <section id='experience'>
      <h5 id='head'>What Skills I Have</h5>
      <h2 id='head'>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience_frontend'>
          <h3 id='head'>Fronend Development</h3>

          <div className="experience_content">
            <article className='details'>
              <MdVerified className='details_icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='details'>
              <MdVerified className='details_icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>

            <article className='details'>
              <MdVerified className='details_icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='details'>
              <MdVerified className='details_icon'/>
              <div>
                <h4>React</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='details'>
              <MdVerified className='details_icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>

            <article className='details'>
              <MdVerified className='details_icon' />
              <div>
                <h4>Vite</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>



        <div className='experience_backend'>
          <h3 id='head'>Backend Development</h3>

          <div className="experience_content">
            <article className='details'>
              <MdVerified className='details_icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='details'>
              <MdVerified className='details_icon' />
              <div>
                <h4>AWS</h4>
                <small className='text_light'>Intermediate</small>
              </div>
            </article>

            <article className='details'>
              <MdVerified className='details_icon' />
              <div>
                <h4>Express JS</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='details'>
              <MdVerified className='details_icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>

            <article className='details'>
              <MdVerified className='details_icon'/>
              <div>
                <h4>Python</h4>
                <small className='text_light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;