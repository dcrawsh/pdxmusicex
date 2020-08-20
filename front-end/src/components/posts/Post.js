import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'

class Post extends Component {
  

  handleOnClick() {
    this.props.deletePost(this.props.post);
  }

  render() {
    const { attributes } = this.props.location.state
    

    return (
      <div>
        
        <h3>Post</h3>
        <h4>{attributes.title}</h4>
        <p>
          {attributes.description}
          <button onClick={() => this.handleOnClick()}> X </button>
        </p>
        <CommentsContainer comments={attributes.comments}/>
      </div>
    );
  }
};

export default Post;