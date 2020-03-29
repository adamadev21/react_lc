import React, { Component } from 'react';
import '../../stylesheets/Tutform.css';
import {connect} from 'react-redux';
import {createPost} from '../ReduxConfiguration/actions'
const mapState = state => ({
  posts: state.posts
})

class TutForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.addPost = this.addPost.bind(this)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(e) {
    this.props.createPost();
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
              value={this.props.posts.title}
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
              value={this.props.posts.text}
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
export default connect(mapState)(TutForm);