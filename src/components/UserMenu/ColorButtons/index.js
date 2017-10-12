//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';
//Internals
import './styles.css';

class ColorButtons extends Component {
  render() {
    return(
      <div className="color-buttons-wrapper">
        <h3 className={`circle-picker-${this.props.className}`}>Choose your color:</h3>
        <CirclePicker onChange={this.props.changeColor}  />
      </div>
    )
  }
}

ColorButtons.propTypes = {
  changeColor: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

export default ColorButtons;
