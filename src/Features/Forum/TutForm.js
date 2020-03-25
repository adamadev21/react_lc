import React, { Component } from 'react';
import '../../stylesheets/Tutform.css';
export default class TutForm extends Component {
  constructor(props) {
    super(props);
    var time = new Date(),
      date = time.toLocaleDateString() + '  ' + time.toLocaleTimeString();
    this.state = { author: '', date: date, title: '', text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.addPost = this.addPost.bind(this)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(e) {
    this.props.addPost(this.state);
    this.setState({ author: '', date: '', title: '', text: '' });
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="post container">
          <h3 className="mt-5">Submit a New Question</h3>
          <p className="">
            Enter a brief description of your question. Limit to one sentence
          </p>
          <div className="d-flex title">
            <label>Title: </label>
            <textarea
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
              id="title"
              cols={100}
              rows={2}
              placeholder="Text here"
              border={0}
            />
          </div>
          <div className="d-flex text">
            <label>Text: </label>
            <textarea
              value={this.state.text}
              onChange={this.handleChange}
              name="text"
              id="title"
              cols={100}
              rows={10}
  placeholder="Type text here"
              border={0}
            />
          </div>
          <button
            type="submit"
            value="Submit"
            name="submit"
            className="ui button primary submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
