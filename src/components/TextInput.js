import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
  render() {
    return (
      <div className="slide">
        <textarea className="markdown-input" />
      </div>
    );
  }
}

export default TextInput;
