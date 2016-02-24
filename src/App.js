import React, { Component } from 'react';
import Knight from './Knight.js';
import Square from './Square.js';


export default class App extends Component {
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
