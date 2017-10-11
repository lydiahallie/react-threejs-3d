//Dependencies
import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import PropTypes from 'prop-types';
import * as OBJLoader from 'three-obj-loader';
import * as THREE from 'three';
//Internals
import './styles.css';
//Loaders
OBJLoader(THREE);

class MeshDisplay extends Component {
  constructor() {
    super();
    this.cameraPosition = new THREE.Vector3(0, 0, 5);
  }

  render() {
    const width = window.innerWidth/2;
    const height = window.innerHeight/2;
    return (
      <div className="mesh-display">
        {/* SET THE CAMERA */}
        <React3
        mainCamera="mesh-display"
        alpha={true}
        clearAlpha={0.3}
        clearColor={0xffffff}
        width={width}
        height={height}
        >
          {/* SET CAMERA, CREATE SCENE & MESH */}
          <scene className="scene">
            <perspectiveCamera
              name="mesh-display"
              fov={75}
              aspect={width / height}
              near={0.1}
              far={1000}
              position={this.cameraPosition}
            />
            <mesh rotation={this.props.cubeRotation} >
              <boxGeometry
                width={1}
                height={1}
                depth={1}
              />
              <meshBasicMaterial
                color={this.props.color}
                wireframe={false}
              />
            </mesh>
          </scene>
        </React3>
      </div>
    );
  }
}

MeshDisplay.propTypes = {
  cubeRotation: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
}

export default MeshDisplay;
