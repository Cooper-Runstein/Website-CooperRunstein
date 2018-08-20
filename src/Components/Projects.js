import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import forwardArrow from '../right-arrow.png';
import backArrow from '../back.png';

const Project = (props) =>{
  return (
    <div className='project-container' key = {props.index}>
      <h3>{props.title}</h3>
      <h4>{props.name}</h4>
      <div className='project-links'>
        <a href={props.src} className='code-link'> {'{ get the code }'}  </a>
        {props.live ? <a href={props.live} className='live-link'>view it live</a> : null}
      </div>

      <p>{props.desciription}</p>

    </div>
  )
}
class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "React Router Example",
          src: 'https://github.com/Cooper-Runstein/Reactify-Coffee-Shop',
          projectTitle: "Coffee Shop Application",
          live: "https://boring-hypatia-eb85d2.netlify.com/menu/coffee",
          desciription: "This is a Single Page Application ceated as a mock website when I was learning CSS, I modified it when learning React Router."
        },
        {
          name: "Node/Express server and a React frontend",
          projectTitle: "SpotCheck Admin Tools",
          src: 'https://bitbucket.org/spotcheckparkingsolutions/admin-tools/src/master/',
          desciription: "A set of administration tools to change the status of remote raspberry pi clients that run moterized vehicle detecion nueral networks. Uses the React Context API, React Router, and JSON web tokens to create a secure system for parking detection administration."
        },
        {
          name: "Vue Router based SPA",
          projectTitle: "SpotCheckParking.com",
          src: '',
          live: 'http://spotcheckparking.com/',
          desciription: "The official SpotCheck Parking Solutions website, still under construction."
        },
        {
          name: "React Project",
          src: 'https://github.com/Cooper-Runstein/React-Personal-Finance-App',
          projectTitle: "Personal Finance App",
          desciription: "In progress application that creates a chart extending from now unitl a given retirement day with one's financial status."
        },
        {
          name: "First React Project",
          src: 'https://github.com/Cooper-Runstein/NBA-App-Learn-React/tree/6984cc8b19e412b51d5d2299862ce2e8750e9067',
          projectTitle: "NBA Stat Comparison",
          live: 'https://quirky-meninsky-9fb61f.netlify.com/',
          desciription: "This project uses the mySportsFeed API to get NBA player's statistics and compare them to other players. The project is one of the first I built with React that wasn't following a tutorial."
        },
        {
          name: "First AJAX Project",
          src: 'https://github.com/Cooper-Runstein/MLB-Players-App',
          projectTitle: "MLB Player Search App",
          live: 'https://quizzical-euler-a68aff.netlify.com/',
          desciription: "This project uses the mySportsFeed API to get MLB player data. It was also one of the first projects I used CSS transitions and transforms in for more than a single feature."
        },
        {
          name: "This Website's code",
          src: 'https://github.com/Cooper-Runstein/Website-CooperRunstein',
          live: '#',
          projectTitle: "CooperRunstein.com",
          desciription: 'This is probably the 4th iteration of personal website I\'ve desigined. I\'ve intentionally kept the styles minimal to not get boggd down on a site I\'m sure will be redone in a few months.'

        },
        {
          name: "First Big Javascript Project",
          src: 'https://github.com/Cooper-Runstein/Liars-dice',
          projectTitle: "Liar's Dice Game",
          desciription: "This was one of the first DOM manipulation projects I built. It isn't very special anymore, but I put a lot of work into trying to make this work."
        },
        {
          name: "First Big Python Project",
          src: 'https://github.com/Cooper-Runstein/Python-Payment-Determination-App',
          projectTitle: "Roomate Payments App",
          desciription: 'This projects was originally built in fall of 2017 as the first "full" program I felt worthy of putting on my github when I signed up.'
        }
    ],
    activeIndex: 0
    }
  }
  render(){
    return(
        <div className='projects-container main-comp-container' id='projects'>
          <h3>Projects</h3>
          <div className='projects-wrapper'>
          <img
            src= { backArrow }
            alt='back'
            className = 'back'
            onClick={()=>{
              let newIndex;
              if (this.state.activeIndex === 0){
                newIndex = this.state.projects.length - 1
              } else {
                newIndex = this.state.activeIndex - 1
              }
              this.setState({activeIndex: newIndex})
            }}></img>

            {/* <ReactCSSTransitionGroup
              component = "span"
              transitionName = "projectDisplay"
              // transitionEnterTimeout= {500}
              // transitionLeaveTimeout= {500}
            > */}
            <span>
              {
                this.state.projects.map((project, index)=>{
                  if (this.state.activeIndex === index){
                    return (
                      <Project
                        key = { index }
                        index = {index}
                        name = { project.name }
                        src = { project.src }
                        title = { project.projectTitle }
                        live = { project.live }
                        desciription = { project.desciription }
                      />
                    )
                  }


                })
              }
              </span>
            {/* </ReactCSSTransitionGroup> */}

            <img
              src={forwardArrow}
              alt='forward'
              className = 'forward'
              onClick={()=>{
                let newIndex;
                if (this.state.activeIndex === this.state.projects.length - 1){
                  newIndex = 0
                } else {
                  newIndex = this.state.activeIndex + 1
                }
                this.setState({activeIndex: newIndex})
                }}></img>
          </div>
        </div>
    )
  }

}

export default Projects;
