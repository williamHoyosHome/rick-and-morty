import React, { Component } from 'react';
import './loader.scss';

export default class Loader extends Component {
  render() {
    return (
      <div className="lds-grid">
        <div />
        <div />
        <div />
      </div>
    );
  }
}
