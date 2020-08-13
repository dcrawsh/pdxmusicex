import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'

class Post extends Component {

  handleOnClick() {
    this.props.deletePost(this.props.post);
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <h4>{post.attributes.title}</h4>
        <p>
          {post.attributes.description}
          <button onClick={() => this.handleOnClick()}> X </button>
        </p>
        <CommentsContainer post={post}/>
      </div>
    );
  }
};

export default Post;