import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Converter } from 'showdown';
import './Slide.css';

const converter = new Converter();

class Slide extends Component {
  createMarkup = () => {
    const { slides, num } = this.props;
    const content = converter.makeHtml(slides[num]);
    return { __html: content };
  };

  render() {
    return (
      <div className="slide">
        <div
          className="slide-content"
          dangerouslySetInnerHTML={this.createMarkup()}
        />
      </div>
    );
  }
}

export default connect((s) => s)(Slide);
