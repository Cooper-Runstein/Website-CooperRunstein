import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import { Header, Footer } from './Components/Static';
import Main from './Components/Main';

// import ReallySmoothScroll from 'really-smooth-scroll';

// ReallySmoothScroll.shim();

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount(){
    window.onscroll = function() {
      headerFunction();
    };

    var headerNav = document.querySelector(".header-nav");

    function headerFunction() {
      console.log('onScroll Called');
      if (window.pageYOffset > 30) {
        headerNav.classList.add("sticky");
      } else {
        headerNav.classList.remove("sticky");
      }
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
