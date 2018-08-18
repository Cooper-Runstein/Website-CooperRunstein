import React from 'react';

const DisplayedSkill = (props)=>{
  const activeSkill = props.skills[props.activeIndex];
  return (
    <div className='active-skill-container'>
      <h4>{activeSkill.title}</h4>
      <ul>
        {activeSkill.lines.map(line => <li>{line}</li>)}
      </ul>
    </div>
  )
}

class Skills extends React.Component {
    constructor() {
      super()
      this.state = {
        activeIndex: 0,
        skillsDescriptions: [
          {
            title: 'CSS and HTML',
            lines: [
              'I began learning CSS and HTML in fall 2017. I began with the base languages, and moved into more advanced areas quickly.',
              'I\'ve used Bootstrap, Flexbox and Grid, though the new and modern Grid system is by far my favorite to work with.',
              'Recently I\'ve picked up SASS basics to help build my style sheets quickly.'
            ]
          },
          {
            title: 'Javascript',
            lines: [
              'I began learning Javascript around the same time as HTML and CSS and it quickly overtook Python as my favorite langauge.',
              'I\'ve began using React and Vue as frotend technologies while experimenting with Node as a backend.',
              'Tensorflow.js has made my affection for JS even stronger and I have a few web-based machine learning projects planned out.',
            ]
          },
          {
            title: 'Python',
            lines: [
              'I began learning Python out of intrest in economic data science as a college Freshman, and instantly loved the langauge more than my own field of study.',
              'Python turned programming from a hobby to a passion; the human-readable syntax and concise nature of the langauge has caused me to explore most new programming concepts through python.',
              'Django was the first backend framework I learned, and the formed the base of my server-side knowledge',
              'Tensorflow has made learning Machine Learning a breeze, and I love experimenting with audio and visual machine recognition.'
            ]
          },
          {
            title: 'Database Querying',
            lines: [
                'I learned SQL alongside python while doing an economic research project, it was certainly not my favorite first time through.',
                'Since then I\'ve grown to appreciate SQL and the power it offers.',
                'Recently I took a course on the NoSql technology MongoDB and found it easy and fun to use. ',
              ]
          },

          {
            title: 'Developer Tools',
            lines: [
                'Once I discoverd the ability to undo mistakes with Git, I began using it on every project almost daily.',
                  'Gulp, Webpack, Browserify, Babel and many more libraries and tools have helped me manage and grow my projects.',
                  'Pipenv and NPM for python and JS respectively have made sharing and managing projects much easier.',
                  'I\'ve used numerous editors and IDEs, Atom, Webstorm and PyCharm to name a few. Today I mostly enjoy using Visual Studio Code.',
                  'I mostly use Linux as my operating system, and have worked through the linux from scratch manual with a friend.',
            ]
          }
        ]
      }
      this.changeSelectedIndex = this.changeSelectedIndex.bind(this);
    }

    changeSelectedIndex = index=> this.setState({activeIndex: index});

    render(){
      return(
        <div class="main-comp-container">
          <div class="skills-list-wrapper">
              <h3>My Skills</h3>
              <ul class="skills-list">
                  <li onClick={()=> this.changeSelectedIndex(0)}>CSS and HTML including SASS, and CSS Grid, my personal favorite CSS tool.</li>
                  <li onClick={()=> this.changeSelectedIndex(1)}>Javascript as a frontend including React and Vue, as well as a backend with Node and Express.</li>
                  <li onClick={()=> this.changeSelectedIndex(2)}>Python, used with machine learning tools like Tensorflow and Keras, as well as backend Django.</li>
                  <li onClick={()=> this.changeSelectedIndex(3)}>Database and server side tools including SQL and MongoDB.</li>
                  <li onClick={()=> this.changeSelectedIndex(4)}>A whole host of developer tools: Git, Gulp, Webpack, Babel, PipEnv, and more.</li>
              </ul>
          </div>
          <DisplayedSkill
            skills = { this.state.skillsDescriptions }
            activeIndex = { this.state.activeIndex }
          />
        </div>

      )
    }

}

export default Skills;
