// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TextInput.css';
import { updateSlide } from '../actions';

type Props = {
  slides: {},
  num: string,
  dispatch: () => null,
};

class TextInput extends Component<Props> {
  render() {
    const { slides, num, dispatch } = this.props;
    return (
      <div className="slide">
        <textarea
          value={slides[num]}
          className="markdown-input"
          onChange={(e) => {
            const text = e.target.value;
            dispatch(updateSlide({ text, num }));
          }}
        />
      </div>
    );
  }
}

export default connect((s) => s)(TextInput);
