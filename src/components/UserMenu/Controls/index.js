//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
  render() {
    return(
      <div className="um-controls">
        <button
          value="up"
          onClick={this.props.onAnimate}
          id="btn-large">
          <i className="material-icons">keyboard_arrow_up</i>
        </button>
        <button
          value="left"
          onClick={this.props.onAnimate}
          id="btn-small-left">
          <i className="material-icons">keyboard_arrow_left</i>
        </button>
        <button
          value="right"
          onClick={this.props.onAnimate}
          id="btn-small-right">
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
        <button
          value="down"
          onClick={this.props.onAnimate}
          id="btn-large">
          <i className="material-icons">keyboard_arrow_down</i>
        </button>
      </div>
    )
  }
}

Controls.propTypes = {
  onAnimate: PropTypes.func.isRequired,
}

export default Controls;
