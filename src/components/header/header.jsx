import React from 'react';
import HeaderSocial from './headerSocial';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/photo2-removebg-preview.png'
import { BiSolidDownArrowCircle } from 'react-icons/bi'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5 id='intro'>Hello I'm</h5>
        <h1 id='name'>Narasimma Raj</h1>
        <h5 className='text_light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'><BiSolidDownArrowCircle /></a>
      </div>
    </header>
  );
};

export default header;