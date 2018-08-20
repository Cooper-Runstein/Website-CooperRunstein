import React from 'react';

const About = (props)=>{

    return(
        <div className="main-comp-container about-container" id='about'>
          <h2>About Me</h2>
          <div className='about-info'>
            <p>I'm Cooper Runstein an Oregon based web developer. I began learning to code in college to suplement my economics major at Miami University in Ohio, and quickly found myself enjoying programming more than my degree program.</p>
            <p>After transfering to the University of Oregon in Eugene, I continued to practice programming every chance I could get. Two years after my initial infatuation, I've explored areas from machine learning to Android to web development, where I now spend most of my time. </p>
            <p>I choose not to switch to a computer science degree because I wanted to spend my time programming, not attending school for an extra year to catch up on a new major. Instead, for the past year I've been programming daily and learning everything I possibly can.</p>
            <p> I currently work with a group of computer science stidents on a project called SpotCheck, working to bring machine vision technology to parking administration. I'm looking to join a team of developers as an intern to further my skill and knowledge.</p>
          </div>
        </div>
    )

}

export default About;
