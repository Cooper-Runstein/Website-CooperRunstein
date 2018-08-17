import React from 'react';

import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
const Main = () => {
  return (
    <div className='main-container'>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Main;
