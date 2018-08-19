import React from 'react';

import forwardArrow from '../right-arrow.png';
import backArrow from '../back.png';

const Project = (props) =>{
  return (
    <div className='project-container'>
      <h3>{props.title}</h3>
      <h4>{props.name}</h4>
      <div className='project-links'>
        <a href={props.src}>Code</a>
        {props.live ? <a href={props.Live}>live</a> : null}
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
          name: "Node/Express server and a React frontend",
          projectTitle: "SpotCheck Admin Tools",
          desciription: "A set of administration tools to change the status of remote raspberry pi clients that run moterized vehicle detecion nueral networks. Uses the React Context API, React Router, and JSON web tokens to create a secure system for parking detection administration."
        },
        {
          name: "React Project",
          src: 'https://github.com/Cooper-Runstein/React-Personal-Finance-App',
          projectTitle: "Personal Finance App",
          // live: "https://boring-hypatia-eb85d2.netlify.com/menu/coffee",
          desciription: "In progress application that creates a chart extending from now unitl a given retirement day with one's financial status."
        },
        {
          name: "React Router Example",
          src: 'https://github.com/Cooper-Runstein/Reactify-Coffee-Shop',
          projectTitle: "Coffee Shop Application",
          live: "https://boring-hypatia-eb85d2.netlify.com/menu/coffee",
          desciription: "This is a Single Page Application ceated as a mock website when learning CSS, I modified it when learning React Router."
        },
        {
          name: "First React Project",
          src: 'https://github.com/Cooper-Runstein/NBA-App-Learn-React/tree/6984cc8b19e412b51d5d2299862ce2e8750e9067',
          projectTitle: "NBA Stat Comparison",
          desciription: "This project uses the mySportsFeed API to get NBA player's statistics and compare them to other players. The project is built with React."
        },
        {
          name: "First AJAX Project",
          src: 'https://github.com/Cooper-Runstein/MLB-Players-App',
          projectTitle: "MLB Player Search App"
        },
        {
          name: "This Website's code",
          src: 'https://github.com/Cooper-Runstein/Website-CooperRunstein',
          projectTitle: "CooperRunstein.com"
        },
        {
          name: "First Big Javascript Project",
          src: 'https://github.com/Cooper-Runstein/Liars-dice',
          projectTitle: "Liar's Dice Game"
        },
        {
          name: "First Big Python Project",
          src: 'https://github.com/Cooper-Runstein/Python-Payment-Determination-App',
          projectTitle: "Roomate Payments App"
        }
    ],
    activeIndex: 0
    }
  }
  render(){
    return(
        <div className='projects-container main-comp-container'>
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
            {
              this.state.projects.map((project, index)=>{
                if (this.state.activeIndex === index){
                  return <Project
                    key = { index }
                    name = { project.name }
                    src = { project.src }
                    title = { project.projectTitle }
                    live = { project.live }
                    desciription = { project.desciription }
                  />
                }


              })
            }
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
