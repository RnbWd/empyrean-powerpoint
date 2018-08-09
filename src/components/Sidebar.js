import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const { displaySidebar } = this.props;
    return (
      <ul
        className="list-group sidebar"
        style={{ marginLeft: displaySidebar ? 0 : -256 }}
      >
        <li className="list-group-item list-group-item-action">
          Presentation Mode
        </li>
        <li className="list-group-item list-group-item-action">Edit mode</li>
        <li className="list-group-item list-group-item-action">
          Morbi leo risus
        </li>
        <li className="list-group-item list-group-item-action">
          Porta ac consectetur ac
        </li>
        <li className="list-group-item list-group-item-action">
          Vestibulum at eros
        </li>
      </ul>
    );
  }
}

export default connect((s) => s)(Sidebar);
