import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Tutoring.css';
import uuid from 'uuid/v4';
import TutForm from './TutForm';
import {connect} from 'react-redux';

import { createPost, updatePost, deletePost } from '../ReduxConfiguration/actions';
const mapState = state => ({
  posts: state.posts
});
const actions = {
  createPost, 
  updatePost, 
  deletePost
};

class Tutoring extends Component {
// {createPost, updatePost, deletePost }= this.props;
  constructor(props) {
    super(props)
    this. handleDeletePost = this. handleDeletePost.bind(this)
  }
 handleDeletePost(id){
      this.props.deletePost(id)
  } 
  renderPosts() {
    return (
      <ul>
        {this.props.posts.map(post => (
          <li key={post.id}>
            <h2 name="title" className="left text-primary">
              {post.title}{' '} 
              <span>
                Posted by 
                {post.author}
              </span>{' '}
              <span>{post.date}</span>
            </h2>
            <p name="text" className="text">
              {post.text}
            </p>
            <div onClick={this.handleDeletePost} className="reply">
              <h4>0 Replies</h4>
              <i className="fa fa-heart" />
              <i className="fa fa-reply primary" />
              <Link to='/tutoring/reply' className="reply-link">Reply</Link>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className="Tutoring">
        <div className="Tutoring-question right menu">
          <Link
            to="/tutoring/form"
            className="ui button primary Tutoring-button"
          >
            New Question
          </Link>
        </div>
        <div>{this.renderPosts()}</div> 
        <TutForm/>
      </div>
    );
  }
}
export default connect(mapState, actions)(Tutoring);
