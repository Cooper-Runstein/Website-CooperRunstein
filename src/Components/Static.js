import React from 'react';

const Header = () => {
  return (
    <React.Fragment >
      <div className='header'>
        <h1> Cooper Runstein</h1>
      </div>
      <nav className='header-nav'><a href='#about'>about</a><a href='#skills'>skills</a><a href='#projects'>projects</a><a href='#contact'>contact</a></nav>
    </React.Fragment>
  )
}
const Footer = () => <div className='footer' id='contact'><h2>Contact Me: <a href='mailto:cooperun@gmail.com'>Email</a></h2><h3>See what I'm working on: <a href='https://github.com/Cooper-Runstein'>github</a></h3><h3>See what I'm Learning: <a href='https://teamtreehouse.com/cooperrunstein'>Team Treehouse</a></h3></div>

export { Header, Footer };
