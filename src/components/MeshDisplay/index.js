//Dependencies
import React, { Component } from 'react';
import * as THREE from 'three';
import {
  App,
  ElementModule,
  SceneModule,
  DefineModule,
  RenderingModule,
  PerspectiveCamera,
  Importer,
  OrbitControlsModule
} from 'whs';
//Internals
import OBJLoader from './lib/OBJLoader';

//Set the perspective camera
const camera = new PerspectiveCamera({
  position: [0, 0, 10]
});

const app = new App([
  new ElementModule(document.createElement('div')),
  new SceneModule(),
  new DefineModule('camera', camera),
  new RenderingModule({
    width: 0, height: 0,
    pixelRatio: 1,

    renderer: {
      antialias: true
    }
  }),
  new OrbitControlsModule()
]);

//Set the material for the mesh
const material = new THREE.MeshBasicMaterial({color: 0xffffff});

new Importer({
  url: './left.obj',
  loader: new OBJLoader(),
  scale: [10, 10, 10],

  parser(group) {
    group.children[0].material = material;
    group.children[1].material = material;

    return group;
  }
}).addTo(app);

class Scene extends Component {
  constructor(props) {
    super(props);

    this.app = app;
    this.scene = app.get('scene');
    this.camera = app.get('camera');
    this.renderer = app.get('renderer');
    this.domChild = app.get('element');
    this.material = material;
  }

  componentDidMount() {
    //Define the width and height of the canvas
    const width = window.innerWidth/2;
    const height = window.innerHeight/2;

    //Get the canvas on the screen
    this.mount.appendChild(this.app.get('element'));

    //Set the size of the canvas
    this.renderer.setSize(width, height);

    app.start();
  }

  //Update color
  componentWillReceiveProps(props) {
    this.material.color.setHex(eval("0x" + props.color.replace('#', '')));
  }

  render() {
    return (
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Scene;
