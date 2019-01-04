import React, { Component } from 'react'
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import {phrases} from "./quotes/quotes";

// images
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";


class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      arr: phrases,
      duration: "",
      settings: {
        dots: "",
        infinite: "",
        speed: "",
        autoplay: ""
      },
      rand: ""
    } 
  }

  onReveal = () => {
    let myArr = phrases;    
    let rand = Math.floor(Math.random()*(myArr.length))    
    this.setState({      
      rand: rand, 
      settings: 
        { 
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: true
        },
      duration: 3000
    }) 
  }  
  
  componentDidMount(){
    this.onReveal();
  }
  render() {    
    return (
      <div style={{position:'relative'}}>    

          <div style={{
            height: `${window.innerHeight}px`,
            minWidth: `${window.innerWidth}px`,
            overflow:'hidden'
            }}>
   
            <Slider {...this.state.settings} > 

              <div className="row col m-0 p-0 d-flex justify-content-center" >                  
                  {/* Quote: */}
                  <div style={{position: 'absolute', top: "40%", zIndex:1}}>
                    <div className="wrapper mx-auto">              
                      <Fade right duration={2000}>
                        <h2 className="text-white"> {this.state.arr[this.state.rand]} </h2>
                      </Fade>
                    </div>
                  </div>
                  {/* Image: */}
                  <div style={{height:`${window.innerHeight}px`, width:'100%', background: `url(${image2})`}}>
                      <div className="bg-dark" 
                        style={{height:`${window.innerHeight}px`, width:'100%', background: 'balack', opacity: .8}}>
                      </div>
                  </div>
              </div> {/*Close row col*/} 
              
              <div className="row col m-0 p-0 d-flex justify-content-center" >                  
                  {/* Quote: */}
                  <div style={{position: 'absolute', top: "40%", zIndex:1}}>
                    <div className="wrapper mx-auto">              
                      <Fade right duration={500}>
                        <h2 className="text-white"> You get in life what you have the courage to ask for. -- Oprah Winfrey  </h2>
                      </Fade>
                    </div>
                  </div>
                  {/* Image: */}
                  <div style={{height:`${window.innerHeight}px`, width:'100%', background: `url(${image8})`}}>
                      <div className="bg-dark" 
                        style={{height:`${window.innerHeight}px`, width:'100%', background: 'balack', opacity: .8}}>
                      </div>
                  </div>                  
              </div> {/*Close row col*/} 

              <div className="row col m-0 p-0 d-flex justify-content-center" >                  
                  {/* Quote: */}
                  <div style={{position: 'absolute', top: "40%", zIndex:1}}>
                    <div className="wrapper mx-auto">              
                      <Fade right duration={2500}>
                        <h2 className="text-white"> {this.state.arr[this.state.rand]} </h2>
                      </Fade>
                    </div>
                  </div>
                  {/* Image: */}
                  <div style={{height:`${window.innerHeight}px`, width:'100%', background: `url(${image4})`}}>
                      <div className="bg-dark" 
                        style={{height:`${window.innerHeight}px`, width:'100%', background: 'balack', opacity: .8}}>
                      </div>
                  </div>                  
              </div> {/*Close row col*/} 

              <div className="row col m-0 p-0 d-flex justify-content-center" >                  
                  {/* Quote: */}
                  <div style={{position: 'absolute', top: "40%", zIndex:1}}>
                    <div className="wrapper mx-auto">              
                      <Fade right duration={2500} >
                        <h2 className="text-white"> {this.state.arr[this.state.rand]} </h2>
                      </Fade>
                    </div>
                  </div>
                  {/* Image: */}
                  <div style={{height:`${window.innerHeight}px`, width:'100%', background: `url(${image7})`}}>
                      <div className="bg-dark" 
                        style={{height:`${window.innerHeight}px`, width:'100%', background: 'balack', opacity: .8}}>
                      </div>
                  </div>                  
              </div> {/*Close row col*/} 

              <div className="row col m-0 p-0 d-flex justify-content-center" >                  
                  {/* Quote: */}
                  <div style={{position: 'absolute', top: "40%", zIndex:1}}>
                    <div className="wrapper mx-auto">              
                      <Fade right duration={2500}>
                        <h2 className="text-white"> {this.state.arr[this.state.rand]} </h2>
                      </Fade>
                    </div>
                  </div>
                  {/* Image: */}
                  <div style={{height:`${window.innerHeight}px`, width:'100%', background: `url(${image6})`}}>
                      <div className="bg-dark" 
                        style={{height:`${window.innerHeight}px`, width:'100%', background: 'balack', opacity: .8}}>
                      </div>
                  </div>                  
              </div> {/*Close row col*/} 
            </Slider>
          </div>      
      </div>      
    )
  }
}

export default Landing;
