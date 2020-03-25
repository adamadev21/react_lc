import React, { Component } from 'react';
import '../../stylesheets/Head.css';
import '../../stylesheets/docs.min.css';
export default class Head extends Component {
  render() {
    return (
      <div className="Head">
        <h1 className="Head-head">Learning Center</h1>
        <h2 className="Head-onlinetut">Tutoring</h2>
        <h2 className="Head-become">Become a Tutor</h2>
        <h2 className="Head-testimonials">Testimonials</h2>
        <h2 className="Head-contact">Contact</h2>
        <h2 className="Head-about">About</h2>
        <h2 className="Head-support">Support</h2>
      </div>
    );
  }
}
