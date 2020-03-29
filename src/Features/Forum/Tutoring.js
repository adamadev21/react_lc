import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Tutoring.css';
import uuid from 'uuid/v4';
import TutForm from './TutForm';
import {connect} from 'react-redux';

import { createPost} from '../ReduxConfiguration/actions';
const mapState = state => {
  return {
    posts: state.post
  }
  
};
const mapDispatch= dispatch => {
  return {
    createPost: ()=> dispatch({type: 'CREATE_POST'})
  }
}

class Tutoring extends Component {
// {createPost, updatePost, dceletePost }= this.props;
  constructor(props) {
    super(props)
  }
  // renderPosts() {
  //   return (
  //     <ul>
  //       {this.props.posts.map(post => (
  //         <li key={Math.random()}>
  //           <h2 name="title" className="left text-primary">
  //             {post.title}{' '} 
  //             <span>
  //               Posted by 
  //               {post.author}
  //             </span>{' '}
  //             <span>{post.date}</span>
  //           </h2>
  //           <p name="text" className="text">
  //             {post.text}
  //           </p>
  //           <div  className="reply">
  //             <h4>0 Replies</h4>
  //             <i className="fa fa-heart" />
  //             <i className="fa fa-reply primary" />
  //             <Link to='/tutoring/reply' className="reply-link">Reply</Link>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
 
  
renderPosts(){
  return (
  <h2>dsafa</h2>
  )
}
  
  render() {
    return (
      <div className="Tutoring">
        <div className="Tutoring-question right menu">
          <Link
      
            className="ui button primary Tutoring-button"
          >
            New Question
          </Link>
        </div>
        <h1>{this.props.posts.author}</h1>
        <div>{this.renderPosts()}</div>
        <TutForm createPost={this.props.createPost}/>
      </div>
    );
  }
}


export default connect(mapState, mapDispatch)(Tutoring);
