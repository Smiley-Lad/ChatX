import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5 id='head'>What I Offer</h5>
      <h2 id='head'>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='list'>
            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='list'>
            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Data Analystic</h3>
          </div>

          <ul className='list'>
            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>

            <li><BiCheck className='list_icon' />
              <p>In this practical react js project tutor</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;