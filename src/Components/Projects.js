import React from 'react';

const Project = (props) =>{
  return (
    <div className='project-container'>
      <h4>{props.name}</h4>
      <div className='project-links'>
      <a href={props.src}>Code</a>
      {props.live ? <a href={props.Live}>live</a> : null}
      </div>
      <span>{props.title}</span>
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
    }
  }
  render(){
    return(
        <div className='projects-container main-comp-container'>
          <h3>Projects</h3>
          <div>
            {
              this.state.projects.map((project, index)=>{
                return <Project
                  key = { index }
                  name = { project.name }
                  src = { project.src }
                  title = { project.projectTitle }
                  live = { project.live }
                  desciription = { project.desciription }
                />
              })
            }
          </div>
        </div>
    )
  }

}

export default Projects;
