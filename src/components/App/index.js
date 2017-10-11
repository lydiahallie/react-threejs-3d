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
      cubeRotation: new THREE.Euler(0, 0, 0),
    };
    this.cameraPosition = new THREE.Vector3(0, 0, 5);
  }

  //Change color to value of button
  changeColor = (color) => {
    this.setState({
      color: color.hex,
    });
  }

  //Change the rotation of mesh on click
  onAnimate = (event) => {
    if (event.target.value === "up") {
      counter++
      this.setState({
        cubeRotation: new THREE.Euler(counter, 0, 0)
      })
    }
    if (event.target.value === "down") {
      counter--
      this.setState({
        cubeRotation: new THREE.Euler(counter, 0, 0)
      })
    }
    if (event.target.value === "left") {
      counter++
      this.setState({
        cubeRotation: new THREE.Euler(0, counter, 0)
      })
    }
    if (event.target.value === "right") {
      counter--
      this.setState({
        cubeRotation: new THREE.Euler(0, counter, 0)
      })
    }
  };

  render() {
    return(
      <div className="app">
        <div className="app-mesh-display">
          <MeshDisplay color={this.state.color} cubeRotation={this.state.cubeRotation} />
        </div>
        <div className="app-user-menu">
          <UserMenu changeColor={this.changeColor} onAnimate={this.onAnimate}/>
        </div>
      </div>
    )
  }
}

export default App;
