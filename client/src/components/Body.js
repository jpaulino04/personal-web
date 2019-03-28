import React, { Component } from "react";
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

class Body extends Component {
  render() {
    return (     
       <div className="container">    
        <Profile />
        <Skills />
        <Experience />
        <Projects/>
      </div>
    );
  }
}

export default Body;
