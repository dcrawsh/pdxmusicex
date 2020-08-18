import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

  render() {
    const { posts } = this.props;
    console.log(posts)
    const postList = posts.posts.map(post => {
      return (
        <Post
            key={post.id}
            deletePost={this.props.deletePost}
            fetchPosts={this.props.fetchPosts}
            post={post}
        />
      )
    });

    return(
      <ul>
        {postList}
      </ul>
    );
  }
};

export default Posts;