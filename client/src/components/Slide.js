import React, { Component } from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"


class Slide extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true
      };
    return (

        <Slider className="row col" {...settings}>
          <div>
              <h4 className="jumbotron border border-2 bg-dark text-center"> 
              <span className="text-info"><strong>AWS Lambda Script: </strong></span>
              <span className="text-white">Developed a AWS Lambda script that automates the creation of snapshots. Snapshots are point in time recovery of EC2 servers that provide a reliable backup and recovery solution within Amazon Web Services. </span>
              </h4>
          </div>

          <div>
            <h4 className="jumbotron border border-2 bg-dark text-center rounded-1"> 
                <span className="text-info"><strong>EC2 Matillion Scrip: </strong></span>
                <span className="text-white">In conjunction with A Database Warehouse Manager, developed a Python script that communicated with other AWS web services. The script generated a message and sent it to the AWS Simple Queue Service (SQS), and was ultimately consumed by Matillion ETL task.  </span>
            </h4>
          </div>

          <div>
            <h4 className="jumbotron border border-2 bg-dark text-center rounded-1"> 
                <span className="text-info"><strong> Application Design: </strong></span>
                <span className="text-white">Took part in the design and implementation of a highly available, scalable and secured web application in the AWS GovCloud. Instances are private, behind a public facing load balancer, and communicate with private RDS instances. All instances were launched in different Availability Zones for High Availability. </span>
            </h4>
          </div>

          

      </Slider> 

        

         
    )
  }
}

export default Slide;