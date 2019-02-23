import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import styles from "./skills.css";

import classnames from "classnames";

import gloablStyles from "../../../assets/App.css";

const DisplayedSkill = props => {
  const activeSkill = props.skills[props.activeIndex];
  return (
    <div className="active-skill-container pane">
      <h4>{activeSkill.title}</h4>
      <ul>
        {activeSkill.lines.map((line, i) => (
          <li key={i} className="card">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      skillsDescriptions: [
        {
          title: "CSS and HTML",
          lines: [
            "I began learning CSS and HTML in fall 2017 as a result of trying Android development and realizing I enjoyed the UI aspect.",
            "After learning native CSS I experimented with Bootstrap, and newer features like Flexbox, and Grid.",
            "In theory, I like to use a mobile first approach, in practice, this rarely happens on personal projects.",
            "My new favorite way to apply styles is SASS modules in React apps, something I picked up at work."
          ]
        },
        {
          title: "Javascript",
          lines: [
            "I began learning Javascript around the same time as HTML and CSS, today I enjoy writing JS second only to Haskell.",
            "I've began using React and Vue as frotend technologies while experimenting with Node as a backend.",
            "Machine learning in Python initially set me on the programming track, and I'm excited to try tensorflow.js in upcoming personal projects."
          ]
        },
        {
          title: "React",
          lines: [
            "I began working with React in March of 2018.",
            "Since then I've built several projects with it and truly love working with it.",
            "I've used React Router, React Transition Groups, some Redux.",
            "I recently used the React Context API and am excited to explore the options it provides in the future."
          ]
        },
        {
          title: "Python",
          lines: [
            "I began learning Python out of intrest in economic data science as a college Freshman, and instantly loved the langauge more than my own field of study.",
            "Python turned programming from a hobby to a passion; the human-readable syntax and concise nature of the langauge has caused me to explore most new programming concepts through python.",
            "Django was the first backend framework I learned, and the formed the base of my server-side knowledge",
            "Tensorflow has made learning Machine Learning a breeze, and I love experimenting with audio and visual machine recognition. I took a college course in the subject to better understand the math."
          ]
        },
        {
          title: "Backend",
          lines: ["I've used both SQL and NoSQL databases, and "]
        },

        {
          title: "Developer Tools",
          lines: ["I've been using git for over a year, and "]
        }
      ]
    };
    this.changeSelectedIndex = this.changeSelectedIndex.bind(this);
  }

  changeSelectedIndex = index => this.setState({ activeIndex: index });

  render() {
    return (
      <div
        className={classnames("container", gloablStyles.container)}
        id="skills"
      >
        <h1>What do I do?</h1>
        <div className={styles.mainWrapper}>
          <div className="skills-list-wrapper">
            <ul className={styles.skillsList}>
              {this.state.skillsDescriptions.map((skill, index) => (
                <li
                  key={index}
                  className={`${
                    this.state.activeIndex === index
                      ? "active-skill"
                      : "inactive-skill"
                  }, menu`}
                  onClick={() => {
                    this.setState({ activeIndex: index });
                  }}
                >
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>
          <DisplayedSkill
            key={this.state.activeIndex}
            skills={this.state.skillsDescriptions}
            activeIndex={this.state.activeIndex}
          />
        </div>
      </div>
    );
  }
}

export default Skills;
