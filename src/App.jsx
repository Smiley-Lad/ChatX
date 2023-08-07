import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/Nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Services from './components/services/Services';
import Projects from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonial';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;