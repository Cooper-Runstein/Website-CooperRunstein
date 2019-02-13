import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

const Main = () => {
  return (
    <div className="main-container">
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
