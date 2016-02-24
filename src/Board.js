import React, { Component, PropTypes } from 'react';
import Knight from './Knight.js';
import Square from './Square.js';


export default class Board extends Component {
  render() {
    return (
      <div>
        <Square black>
          <Knight/>
        </Square>
      </div>
    );
  }
}

Board.PropTypes = {
  KnightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
  ).isRequired
};
