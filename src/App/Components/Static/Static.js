import React from "react";

import classnames from "classnames";

import styles from "./Header.css";

const Header = ({ headerSticky }) => {
  return (
    <React.Fragment>
      <nav
        className={classnames(
          "header-nav",
          styles.header,
          headerSticky && styles.sticky
        )}
        style={{ maxWidth: "100vw" }}
      >
        <a href="#about">about</a>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
      <div className="header">
        <h1> Cooper Runstein</h1>
      </div>
    </React.Fragment>
  );
};
const Footer = () => (
  <div className="footer" id="contact">
    <h2>
      Contact Me: <a href="mailto:cooperun@gmail.com">Email</a>
    </h2>
    <h3>
      See what I'm working on:{" "}
      <a href="https://github.com/Cooper-Runstein">github</a>
    </h3>
    <h3>
      See what I'm Learning:{" "}
      <a href="https://teamtreehouse.com/cooperrunstein">Team Treehouse</a>
    </h3>
  </div>
);

export { Header, Footer };
