//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';

class ColorButtons extends Component {
  render() {
    return(
      <div className="um-btn-wrapper">
        <h3>Choose your color:</h3>
        <CirclePicker onChange={this.props.changeColor} />
      </div>
    )
  }
}

ColorButtons.propTypes = {
  changeColor: PropTypes.func.isRequired,
}

export default ColorButtons;
