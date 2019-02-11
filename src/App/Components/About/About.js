import React from "react";

import "./About.css";

const About = props => {
  return (
    <div className="container about-container" id="about">
      <h2>Who Am I?</h2>
      <div className="about-info">
        <p className="panel">
          I'm Cooper Runstein an Oregon based software engineer. I began
          learning to code in college to suplement my economics major and
          quickly found myself enjoying programming more than my degree program.
          I've been writing code almost daily for almost two years now.
        </p>
        <p className="panel">
          During those two years I've gone from learning the basics of Python to
          exploring functional programming with Haskell, I've dabbled in PHP and
          Java, and taken a class taught in C++. I've written scripts in Go and
          C, and even taken a course that touched on Assembly. At the end of the
          day, I find myself writting JavaScript the most, both at work and at
          home.
        </p>
        <p className="panel">
          I ended up exploring web development when attempting to build and
          Android app in Java. Building the interface had me hooked, the ability
          able to create apps anyone could use was incredible but using Java and
          related tools felt like fighting an uphill battle. Then I found
          JavaScript and was hooked.
        </p>
        <p className="panel">
          I began as a software engineering intern at Vacasa in October 2018. I
          work mainly on the Frontend, writing code in React with Redux.
        </p>
        <p className="panel">
          I'm currently interested in understanding security better,
          particularly surronding external depenendencies, clearly a major issue
          in the JavaScript world. I'm also very interested in learning how to
          write better tests, and aim to improve my TDD skills.
        </p>
      </div>
    </div>
  );
};

export default About;
