//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Internals
import ColorButtons from './ColorButtons';
import UserGuide from './UserGuide';
import './styles.css';

class UserMenu extends Component {
  render() {
    return(
      <div className="um-wrapper">
        <h1>Controls</h1>
        <ColorButtons
          changeColor={this.props.changeColor}
          className={this.props.className}
        />
        <h1>Need Help?</h1>
        <UserGuide />
      </div>
    )
  }
}

UserMenu.propTypes = {
  changeColor: PropTypes.func.isRequired,
}

export default UserMenu;
