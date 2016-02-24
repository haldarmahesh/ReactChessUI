import React, { Component, PropTypes } from 'react';
export default class Sqaure extends Component {
  render() {
    const black = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
      }}>
      {this.props.children}
      </div>
    );
  }
}

Sqaure.PropTypes = {
  black: PropTypes.bool
}
