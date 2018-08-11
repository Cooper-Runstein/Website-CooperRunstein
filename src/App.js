import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import About from './Components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div class="wrapper">
            <div class="header">
                <h2>Cooper Runstein</h2>
                <nav>
                </nav>
            </div>
            <div class="body">
                <div id="about-me" class="about-me">
                    <div class="about-content">
                        <About />
                    </div>
                </div>

                <div id="work" class="work">
                    <h2 class="section-title">My Work</h2>
                </div>

                <div id="skills" class="skills">
                    <h2 class="section-title" class="skills-title">Skills</h2>

                    <div class="skills-body-wrapper">
                        <div class="skills-list-wrapper">
                            <h3>My Skills</h3>
                            <ul class="skills-list">
                               
                            </ul>
                        </div>

                        <div class="skills-descriptions">
                            
                        </div>
                    </div>
                </div>

            </div>
            <div class="footer">
                <div class="contact">
                    <h3>Contact Me</h3>
                    <p>cooperun@gmail.com</p>
                </div>
                <p>This Site Made with React</p>
            </div>
          </div>
          </div>
    )}
}

export default App;
