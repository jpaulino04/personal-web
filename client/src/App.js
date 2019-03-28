import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header />
        <div className="container-fluid no-gutters p-0">
          <Switch>
            {/* <Route exact path="/" component={Landing} /> */}
            <Route exact path="/" component={Body} />           
          </Switch>
 
        </div>
        <Footer />
        </div>
        
      </Router>
    );
  }
}

export default App;
