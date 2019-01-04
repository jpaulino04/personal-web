import React, {Component} from 'react'
import Slider from "./Slide";


class Projects extends Component {
    state = {
        projects: false,
        projectClass: "fas fa-chevron-circle-up"
    } 
    
    changeClass = (settings) =>{
        if(this.state.projectClass === "fas fa-chevron-circle-down"){
            settings.projectClass = "fas fa-chevron-circle-up"
            settings.projects = false;
            this.setState({projects: settings.projects, projectClass:settings.projectClass})
        } else {
            settings.projectClass = "fas fa-chevron-circle-down"
            settings.projects = true;
            this.setState({projects: settings.projects, projectClass:settings.projectClass})
        }    
    }   
    render(){
        //fas fa-chevron-circle-up
        const {projects} = this.state;  
        let settings = {
            projects: true,
            projectClass: "fas fa-chevron-circle-up"
        }     
      return (
        <React.Fragment>
            <hr className="my-4" />
    
            <div className="row">
                <div className="col-sm-12">
                    <p className="display-4 text-center">
                    Projects{" "}
                    <i
                        className={this.state.projectClass}
                        onClick={this.changeClass.bind(settings)}
                    />{" "}
                    </p>
                </div>
                <div className="col-sm-12">
                    { projects ?
                      
                        <h1 className="text-center"></h1>
                        : <Slider>
                        </Slider>
                    }
                </div>
            </div>
    
        </React.Fragment>
      )
    }
}


export default Projects;
