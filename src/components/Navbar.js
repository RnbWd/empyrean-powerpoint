// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { displaySidebar } from '../actions';
import './Navbar.css';

class Navbar extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <nav className="navbar fixed-top navbar-dark header">
        <IconButton
          className="navbar-brand menu-button"
          color="inherit"
          aria-label="Menu"
          onClick={(e) => {
            dispatch(displaySidebar());
          }}
        >
          <MenuIcon />
        </IconButton>
      </nav>
    );
  }
}

export default connect((s) => s)(Navbar);
