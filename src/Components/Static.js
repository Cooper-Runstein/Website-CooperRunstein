import React from 'react';

const Header = () => {
  return (
    <React.Fragment >
      <div className='header'>
        <h1> Cooper Runstein</h1>
      </div>
      <nav className='header-nav'><a>about</a><a>skills</a><a>projects</a><a>contact</a></nav>
    </React.Fragment>
  )
}
const Footer = () => <div className='footer'><h1>Contact Me: <a href='mailto:cooperun@gmail.com'>Email</a></h1></div>

export { Header, Footer };
