//Dependencies
import React, { Component } from 'react';
import * as THREE from 'three';
//Internals
import UserMenu from '../UserMenu';
import MeshDisplay from '../MeshDisplay';
import './styles.css';
//Variables
let counter = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: 0x00ff00,
    };
  };

  //Change color to value of button
  changeColor = (color) => {
    this.setState({
      color: color.hex,
    });
  };

  render() {
    return(
      <div className="app">
        <div className="app-mesh-display">
          <MeshDisplay color={this.state.color} />
        </div>
        <div className="app-user-menu">
          <UserMenu changeColor={this.changeColor} />
        </div>
      </div>
    );
  };
}

export default App;
