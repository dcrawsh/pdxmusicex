import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'
import { connect } from 'react-redux';

export default class Post extends Component {
  
  
  
  handleOnClick() {
    this.props.deletePost(this.props.post);
  }

  render() {
    debugger
    // const postId = this.props.match.params.id

    // const post = this.props.posts.posts.find(post => post.id === postId)

    
    
    
    return (
      <div>
        
        <h3>Post</h3>
        <h4>{post.attributes.title}</h4>
        <p>
          {post.attributes.description}
          <button onClick={() => this.handleOnClick()}> X </button>
        </p>
        <CommentsContainer comments={post.attributes.comments} postId={postId}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {posts: state.posts}
}

connect(mapStateToProps)(Post)
