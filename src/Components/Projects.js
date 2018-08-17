import React from 'react';

const Project = (props) =>{
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.src}</span>
      <span>{props.title}</span>
    </div>
  )
}
class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "First React Project",
          src: 'https://github.com/Cooper-Runstein/NBA-App-Learn-React/tree/6984cc8b19e412b51d5d2299862ce2e8750e9067',
          projectTitle: "NBA Stat Comparison"
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
        <div>
          <h3>Projects</h3>
          <div>
            {
              this.state.projects.map((project, index)=>{
                return <Project
                  key = { index }
                  name = { project.name }
                  src = { project.src }
                  title = { project.projectTitle }
                />
              })
            }
          </div>
        </div>
    )
  }

}

export default Projects;
