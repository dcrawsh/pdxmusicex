import React, { Component } from 'react';
import Post from './Post';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Posts extends Component {


  mapCategories = () => {
    return this.props.categories.categories.map(category => <option key={category.id} value={category.id}>{category.attributes.name}</option>)
  }
  
  

   
      
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
      <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)} >
        <label htmlFor="category">Filter By Category:</label>
          <select onChange={(event) => this.handleOnChange(event)} name="category_id" id="category">
             <option value="">--Please choose an option--</option>
              {this.mapCategories()}
          </select><br></br>
      </form>
      <ul>
        {postList}
      </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps)(Posts);