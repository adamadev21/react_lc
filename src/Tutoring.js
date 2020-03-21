import React, { Component } from 'react';

export default class Tutoring extends Component {
  render() {
    return (
      <div>
        <button className="ui primary button">Questions</button>
        <div className="ui transparent icon input">
          <input type="text" placeholder="Search a question" />
          <i className="search link icon"></i>
        </div>
      </div>
    );
  }
}
