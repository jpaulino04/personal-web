import React, { Component } from "react";

class Experience extends Component {
  constructor(props){
    super(props)

    this.state = {
      workExperience: false,
      projectClass: "fas fa-chevron-circle-down"
    };
  }
  
  changeClass = (settings, e) =>{
    console.log(this.state)
    if(this.state.projectClass === "fas fa-chevron-circle-down"){
        settings.projectClass = "fas fa-chevron-circle-up"
        settings.workExp = true;
        this.setState({workExperience: settings.workExp, projectClass: settings.projectClass})
    } else {
        settings.projectClass = "fas fa-chevron-circle-down";
        settings.workExp = false;
        this.setState({workExperience: settings.workExp, projectClass: settings.projectClass})
    }    
}  
  render() {
    const { workExperience } = this.state;
    let settings = {
      workExp: false,
      projectClass: "fas fa-chevron-circle-down"
  }     
    return (
      <div>
        <hr className="my-4" />

        <div className="row">
          <div className="col-sm-12">
            <p className="display-4 text-center">
              Work Experience{" "}
              <i
                className={this.state.projectClass}
                onClick={this.changeClass.bind(this,settings)}
              />{" "}
            </p>
          </div>

          {workExperience ? (
            <React.Fragment>
              <div className="col-sm-8 mx-auto ">
                <div className=" card card-body bg-dark  text-center my-2">
                  <p className="card-title text-muted ">IPRO </p>
                  <p className="text-white lead text-info">(2015 - Present)</p>
                  <ul className="list-group">
                    <li className="list-group-item">IT/PC support</li>
                    <li className="list-group-item">Application Deployment</li>
                    <li className="list-group-item">
                      AWS Cloud Administration
                    </li>
                    <li className="list-group-item">
                      Linux Web Servers
                    </li>
                    <li className="list-group-item">
                      Nodejs & Python scripting
                    </li>                    
                    <li className="list-group-item">
                      Serverless
                    </li>
                    <li className="list-group-item">
                      Containers
                    </li>
                    <li className="list-group-item">
                      CI/CD
                    </li>
                  </ul>
                </div>
              </div>
              {/* End IPRO Experience */}
              <div className="col-sm-8 mx-auto ">
                <div className="card card-body bg-dark mx-auto text-center my-2">
                  <p className="card-title text-muted ">Optimum</p>
                  <p className="text-white lead text-info">(2014 - 2015)</p>
                  <ul className="list-group">
                    <li className="list-group-item">Residential Wiring</li>
                    <li className="list-group-item">General Troubleshooting</li>
                    <li className="list-group-item">
                      Setup Ethernet & Wifi signal
                    </li>
                    <li className="list-group-item">
                      Cable Box, Modem and Router Installation
                    </li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Experience;
