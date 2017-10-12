//Dependencies
import React, { Component } from 'react';
//Internals
import './styles.css';

class UserGuide extends Component {
  constructor() {
    super();
    this.state = {
      classNameColor: 'inactive',
      classNameView: 'inactive'
    }
  };

  activeDropDownColor = () => {
    this.state.classNameColor === 'inactive' ?
    this.setState({
      classNameColor: 'active',
    }) :
    this.setState({
      classNameColor: 'inactive'
    })
  };

  activeDropDownView = () => {
    this.state.classNameView === 'inactive' ?
    this.setState({
      classNameView: 'active',
    }) :
    this.setState({
      classNameView: 'inactive'
    })
  };

  render() {
    return(
      <div className="user-guide-wrapper">
        <h1>Need Help?</h1>
        <div className="user-guide-content">
          <div className={`ug-text-1-${this.state.classNameColor}`}>
            <h5 onClick={this.activeDropDownColor}>Change Color</h5>
            <p>In order to change the color, click on one of the circles underneath 'Choose your color'.</p>
          </div>
          <div className={`ug-text-2-${this.state.classNameView}`}>
            <h5 onClick={this.activeDropDownView}>Change View</h5>
            <p>In order to do zoom in, zoom out, or change the angle: simply drag your cursor over the foot, and zoom in with the trackpad on the computer or roll your mousewheel.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserGuide;
