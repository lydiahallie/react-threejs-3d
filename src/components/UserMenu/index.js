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
        <ColorButtons
          changeColor={this.props.changeColor}
          className={this.props.className}
        />
        <UserGuide />
      </div>
    )
  }
}

UserMenu.propTypes = {
  changeColor: PropTypes.func.isRequired,
}

export default UserMenu;
