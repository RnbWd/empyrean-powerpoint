// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displaySidebar } from '../actions';
import './Navbar.css';
class Navbar extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <nav className="navbar fixed-top navbar-dark  header">
        <a
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            dispatch(displaySidebar());
          }}
        >
          Sticky top
        </a>
      </nav>
    );
  }
}

export default connect((s) => s)(Navbar);
