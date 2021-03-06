import React, { Component } from "react";
import { Header, Footer } from "./Components/Static";
import Main from "./Components/Main";

import smoothScroll from "./scroll.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerSticky: false
    };
  }

  headerFunction() {
    var headerNav = document.querySelector(".header-nav");
    console.log("onScroll Called");
    if (window.pageYOffset > 30) {
      this.state.headerSticky === false &&
        this.setState({ headerSticky: true });
    } else {
      this.setState({ headerSticky: false });
    }
  }

  componentDidMount() {
    window.onscroll = () => this.headerFunction();

    let about = document.getElementById("about");
    let skills = document.getElementById("skills");
    let projects = document.getElementById("projects");
    let contact = document.getElementById("contact");

    let to_about = document.querySelectorAll("a[href='#about']");
    let to_skills = document.querySelectorAll("a[href='#skills']");
    let to_projects = document.querySelectorAll("a[href='#projects']");
    let to_contact = document.querySelectorAll("a[href='#contact']");

    to_about[0].addEventListener("click", () =>
      smoothScroll(about, 300, "easeOutQuad")
    );
    to_skills[0].addEventListener("click", () =>
      smoothScroll(skills, 300, "easeOutQuad")
    );
    to_projects[0].addEventListener("click", () =>
      smoothScroll(projects, 300, "easeOutQuad")
    );
    to_contact[0].addEventListener("click", () =>
      smoothScroll(contact, 300, "easeOutQuad")
    );
  }

  render() {
    return (
      <div className="App">
        <Header headerSticky={this.state.headerSticky} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
