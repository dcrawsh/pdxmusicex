import React, { Component } from 'react';
import Post from './Post';
import { Link } from 'react-router-dom'

class Posts extends Component {

  render() {
    const { posts } = this.props;
    console.log(posts)
    const postList = posts.posts.map(post => {
      return (
        <h3 key={post.id}><Link to={{pathname: `/posts/${post.id}`, state:{id: post.id, attributes: post.attributes}}}> {post.attributes.title} </Link></h3>
        // // <Post
        //     // key={post.id}
        //     // deletePost={this.props.deletePost}
        //     // fetchPosts={this.props.fetchPosts}
        //     // post={post}
        // />
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