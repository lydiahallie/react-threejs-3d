//Dependencies
import React, { Component } from 'react';
import * as THREE from 'three';
//Internals
import UserMenu from '../UserMenu';
import Scene from '../MeshDisplay';
// import MeshDisplay from '../MeshDisplay';
import './styles.css';
//Variables
let counter = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: 0x00ff00,
    };
  }

  //Set state to value of button
  changeColor = (color) => {
    this.setState({
      color: color.hex,
    });
  }

  render() {
    return(
      <div className="app">
        <div className="app-mesh-display">
          <Scene color={this.state.color} />
        </div>
        <div className="app-user-menu">
          <UserMenu changeColor={this.changeColor} onAnimate={this.onAnimate}/>
        </div>
      </div>
    )
  }
}

export default App;
