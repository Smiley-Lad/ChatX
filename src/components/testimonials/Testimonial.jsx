import React from 'react';
import './testimonial.css';
import AVT1 from '../../assets/avatar1.jpg';
import AVT2 from '../../assets/avatar2.jpg';
import AVT3 from '../../assets/avatar3.jpg';
import AVT4 from '../../assets/avatar4.jpg';


import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVT1,
    name: 'Tina Snow',
    review: "Developers specializing in full-stack development develop both the front-end and the back end of software or an app (web and mobile). It involves handling tasks related to programming, designing, managing databases, and debugging websites or applications. It can suffice to say that a full stack developer helps determine an application's look, feel, and functionality."
  },
  {
    avatar: AVT2,
    name: 'Shatta Wale',
    review: "Developers specializing in full-stack development develop both the front-end and the back end of software or an app (web and mobile). It involves handling tasks related to programming, designing, managing databases, and debugging websites or applications. It can suffice to say that a full stack developer helps determine an application's look, feel, and functionality."
  },
  {
    avatar: AVT3,
    name: 'Jhon Wick',
    review: "Developers specializing in full-stack development develop both the front-end and the back end of software or an app (web and mobile). It involves handling tasks related to programming, designing, managing databases, and debugging websites or applications. It can suffice to say that a full stack developer helps determine an application's look, feel, and functionality."
  },
  {
    avatar: AVT4,
    name: 'Joseph',
    review: "Developers specializing in full-stack development develop both the front-end and the back end of software or an app (web and mobile). It involves handling tasks related to programming, designing, managing databases, and debugging websites or applications. It can suffice to say that a full stack developer helps determine an application's look, feel, and functionality."
  },
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5 id='head'>Review From Client</h5>
      <h2 id='head'>Testimonial</h2>

      <Swiper className="container testimonial_container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;