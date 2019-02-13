import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import classnames from "classnames";

import styles from "./projects.css";

import globalStyles from "../../../assets/App.css";

import forwardArrow from "../../../assets/right-arrow.png";
import backArrow from "../../../assets/back.png";

const Project = props => {
  return (
    <div className="project-container card" key={props.index}>
      <h3>{props.title}</h3>
      <h4>{props.name}</h4>
      <div className="project-links">
        <a href={props.src} className="code-link">
          {" "}
          {"{ get the code }"}{" "}
        </a>
        {props.live ? (
          <a href={props.live} className="live-link">
            view it live
          </a>
        ) : null}
      </div>

      <p>{props.desciription}</p>
    </div>
  );
};
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "React Router Example",
          src: "https://github.com/Cooper-Runstein/Reactify-Coffee-Shop",
          projectTitle: "Coffee Shop Application",
          live: "https://boring-hypatia-eb85d2.netlify.com/menu/coffee",
          desciription:
            "This is a Single Page Application ceated as a mock website when I was learning CSS, I modified it when learning React Router. Design isn't my strong suit, which will be obvious when viewing this project."
        },
        {
          name: "First React Project",
          src:
            "https://github.com/Cooper-Runstein/NBA-App-Learn-React/tree/6984cc8b19e412b51d5d2299862ce2e8750e9067",
          projectTitle: "NBA Stat Comparison",
          live: "https://quirky-meninsky-9fb61f.netlify.com/",
          desciription:
            "This project uses the mySportsFeed API to get NBA player's statistics and compare them to other players. The project is one of the first I built with React that wasn't following a tutorial. As of Aug 21, 2018, the API has changed and searches don't work. I'm slowly working on an ESPN crawler to fill these searches instead."
        },
        {
          name: "First AJAX Project",
          src: "https://github.com/Cooper-Runstein/MLB-Players-App",
          projectTitle: "MLB Player Search App",
          live: "https://quizzical-euler-a68aff.netlify.com/",
          desciription:
            "This project uses the mySportsFeed API to get MLB player data. It was also one of the first projects I used CSS transitions and transforms in for more than a single feature. As of Aug 21, 2018, the API has changed and searches don't work. I'm slowly working on an ESPN crawler to fill these searches instead."
        },
        {
          name: "Django Project",
          src: "https://github.com/Cooper-Runstein/django-baseball-cards",
          projectTitle: "Baseball Card Collection App",
          desciription:
            "In progress. Uses Django in Python to store and display info about my baseball cards collection."
        },
        {
          name: "Python And Requests API/Web Crawler Project",
          src:
            "https://github.com/Cooper-Runstein/Python-Baseball-Best-Player-Finder",
          projectTitle: "Command Line MLB players App",
          desciription:
            "Uses BeautifulSoup and Requests. It makes calls to an API allowing a user to compare the best players on different teams and positions. This API is now charging ridiculously high fees, so I'm looking for an alternative."
        },
        {
          name: "PHP Laravel/Eloquent Project",
          projectTitle: "TODO list",
          src: "https://github.com/Cooper-Runstein/Laravel-Todo-List",
          desciription:
            "A practice project using Laravel and Eloquent, this was a Treehouse tutorial, but using the newest version of Laravel. That proved to be the hardest part. I hope to one day make this more polished, if I ever feel like using PHP voluntarily again."
        },
        {
          name: "This Website's code",
          src: "https://github.com/Cooper-Runstein/Website-CooperRunstein",
          live: "#",
          projectTitle: "CooperRunstein.com",
          desciription:
            "This website, as seen in the git history, has gone through many, many, many iterations. I don't plan on stopping any time soon. This current iteration is focusing on building a better component structure, css modules mixed with a light css framework (so I don't need to spend as much time playing designer) and building animations correctly. Following that, I'd like to move away from plain JavaScript and invest in TypeScript and a more custom developer experience with tslint and prettier configured exactly to my liking."
        },
        {
          name: "First Big Javascript Project",
          src: "https://github.com/Cooper-Runstein/Liars-dice",
          projectTitle: "Liar's Dice Game",
          desciription:
            "This was one of the first DOM manipulation projects I built. The code is quite appaling, looking back on it, but I put a great many hours into making this work."
        },
        {
          name: "First Big Python Project",
          src:
            "https://github.com/Cooper-Runstein/Python-Payment-Determination-App",
          projectTitle: "Roomate Payments App",
          desciription:
            'This projects was originally built in fall of 2017 as the first "full" program I felt worthy of putting on my github when I signed up.'
        }
      ],
      activeIndex: 0
    };
  }
  render() {
    return (
      <div className={globalStyles.container} id="projects">
        <h1>What have I done?</h1>
        <div className={styles.mainContentWrapper}>
          <img
            src={backArrow}
            alt="back"
            className={styles.back}
            onClick={() => {
              let newIndex;
              if (this.state.activeIndex === 0) {
                newIndex = this.state.projects.length - 1;
              } else {
                newIndex = this.state.activeIndex - 1;
              }
              this.setState({ activeIndex: newIndex });
            }}
          />
          <div
            className={classnames("projects-wrapper pane", styles.mainPanel)}
          >
            {/* <ReactCSSTransitionGroup
              component = "span"
              transitionName = "projectDisplay"
              // transitionEnterTimeout= {500}
              // transitionLeaveTimeout= {500}
            > */}

            {this.state.projects.map((project, index) => {
              if (this.state.activeIndex === index) {
                return (
                  <Project
                    key={index}
                    index={index}
                    name={project.name}
                    src={project.src}
                    title={project.projectTitle}
                    live={project.live}
                    desciription={project.desciription}
                  />
                );
              }
            })}
            {/* </ReactCSSTransitionGroup> */}
          </div>
          <img
            src={forwardArrow}
            alt="forward"
            className={styles.forward}
            onClick={() => {
              let newIndex;
              if (this.state.activeIndex === this.state.projects.length - 1) {
                newIndex = 0;
              } else {
                newIndex = this.state.activeIndex + 1;
              }
              this.setState({ activeIndex: newIndex });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
