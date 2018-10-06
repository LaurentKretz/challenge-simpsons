import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes"; //appler le tableau Quotes
import Lamp from './Lamp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      working : false
    }
  }
  clickOnWork = () => {
    this.setState ({
      working : !this.state.working
      // il est plus intéressant de mettre l'inverse du state iniial "!this.state.working" plutot que False
      // on peut ainsi passer de l'état false à son inverse true puis à son invers en cliquant de nouveau false etc..
    })
  }
  render() {
    const workOrNot = this.state.working ? 'work' : 'unwork';    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className={workOrNot} />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button className={workOrNot} onClick={this.clickOnWork}>{workOrNot.toUpperCase()}</button>
        </header>
        <Lamp />
        <Lamp />
        <Quotes/>
      </div>
    );
  }
}

export default App;
