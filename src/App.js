import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import { Header, Footer } from './Components/Static';
import Main from './Components/Main';



class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    )}
}

export default App;
