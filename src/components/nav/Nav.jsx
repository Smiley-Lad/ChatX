// import React from 'react';
// import './nav.css';
// import {AiOutlineHome} from 'react-icons/ai';
// import {AiOutlineUser} from 'react-icons/ai';
// import {BiBook} from 'react-icons/bi';
// import {RiServiceLine} from 'react-icons/ri';
// import {MdOutlineContactPage} from 'react-icons/md';
// import {PiGitForkLight} from 'react-icons/pi';
// import {useState} from 'react';

// const nav = () => {
//   const [activeNav, setActiveNav] = useState('#');
//   return (
//     <nav>
//       <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
//       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
//       <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
//       <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
//       <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><PiGitForkLight/></a>
//       <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPage /></a>
//     </nav>
//   );
// };

// export default nav;

import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
//import { RiServiceLine } from 'react-icons/ri';
import { MdOutlineContactPage } from 'react-icons/md';
import { VscFolderLibrary } from 'react-icons/vsc';
import { PiCertificate } from 'react-icons/pi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <PiCertificate />
      </a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>
        <VscFolderLibrary />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <MdOutlineContactPage />
      </a>
    </nav>
  );
};

export default Nav;
