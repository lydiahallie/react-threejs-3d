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

class MeshDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Define the width and height
    const width = window.innerWidth/2;
    const height = window.innerHeight/2;

    //Set the perspective camera
    const camera = new PerspectiveCamera({
      aspect: width / height,
      position: [0, 0, 5]
    });

    //Create the app: Scene, Renderer, OrbitControl
    const app = new App([
      new ElementModule(this.mount),
      new SceneModule(),
      new DefineModule('camera', camera),
      new RenderingModule({
        width, height,
        pixelRatio: 1,
        renderer: {
          antialias: true
        },
        bgColor: 0x393939,
      }),
      new OrbitControlsModule()
    ]);

    const material = new THREE.MeshBasicMaterial({color: this.props.color});

    //Import the .obj file and add it to app
    new Importer({
      url: './right.obj',
      loader: new OBJLoader(),
      scale: [20, 10, 20],

      parser(group) {
        group.children[0].material = material;
        group.children[1].material = material;

        return group;
      }
    }).addTo(app);

    this.app = app;
    this.scene = app.get('scene');
    this.camera = app.get('camera');
    this.renderer = app.get('renderer');
    this.domChild = app.get('element');
    this.material = material;

    app.start();
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

export default MeshDisplay;
