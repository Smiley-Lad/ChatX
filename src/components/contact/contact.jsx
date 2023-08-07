// import React, { useRef } from 'react';
// import './contact.css';
// import {MdOutlineEmail} from 'react-icons/md';
// import {BiLogoInstagram} from 'react-icons/bi';
// import {LiaTelegramPlane} from 'react-icons/lia';

// import emailjs from 'emailjs-com'

// const contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <section id='contact'>
//       <h5 id='head'>Get In Touch</h5>
//       <h2 id='head'>Contact Me</h2>

//       <div className="container contact_container">
//         <div className="contact_options">
//         <article className="contact_option">
//             <MdOutlineEmail className='contact_icon'/>
//             <h4>Email</h4>
//             <h5>rajnarasimma378@gmail.com</h5>
//             <a href="mailto:rajnarasimma378@gmail.com">
//               Send a massage
//             </a>
//           </article>

//           <article className="contact_option">
//             <BiLogoInstagram className='contact_icon'/>
//             <h4>Instagram</h4>
//             <h5>Smiley_Lad</h5>
//             <a href="https://www.instagram.com/direct/t/smiley._.lad">
//               Send a massage
//             </a>
//           </article>

//           <article className="contact_option">
//             <LiaTelegramPlane className='contact_icon'/>
//             <h4>Telegram</h4>
//             <h5>Narasimmaraj</h5>
//             <a href="https://t.me/NarasimmaRaj/">
//               Send a massage
//             </a>
//           </article>
//         </div>
//         <form action="">
//           <input type="text" name='name' placeholder='Your Full Name' required />
//           <input type="email" name='email' placeholder='Your Email' required />
//           <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
//           <button type='submit' className='btn btn-primary'>Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default contact;

import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BiLogoInstagram } from 'react-icons/bi';
import { LiaTelegramPlane } from 'react-icons/lia';

import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3dghjzk', 'template_h7yi2rp', form.current, 's4W1RPyy6Ey4zP7wo')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5 id='head'>Get In Touch</h5>
      <h2 id='head'>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_icon' />
            <h4>Email</h4>
            <h5>rajnarasimma378@gmail.com</h5>
            <a href="mailto:rajnarasimma378@gmail.com">
              Send a massage
            </a>
          </article>

          <article className="contact_option">
            <BiLogoInstagram className='contact_icon' />
            <h4>Instagram</h4>
            <h5>Smiley_Lad</h5>
            <a href="https://www.instagram.com/direct/t/smiley._.lad">
              Send a massage
            </a>
          </article>

          <article className="contact_option">
            <LiaTelegramPlane className='contact_icon' />
            <h4>Telegram</h4>
            <h5>Narasimmaraj</h5>
            <a href="https://t.me/NarasimmaRaj/">
              Send a massage
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
