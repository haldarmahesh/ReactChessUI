import React, { Component } from 'react';
import Board from './Board.js';

export default class App extends Component {
  render() {
    return (
      <Board KnightPosition= {[0,0]}/>
    );
  }
}
