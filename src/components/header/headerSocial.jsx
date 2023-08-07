import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const headerSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/narasimma-raj-5b7b77191/" target='_blank' ><BsLinkedin /></a>
        <a href="https://github.com/Smiley-Lad" target='_blank' ><BsGithub /></a>
    </div>
  );
};

export default headerSocial;