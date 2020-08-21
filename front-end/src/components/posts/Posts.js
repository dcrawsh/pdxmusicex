import React, { Component } from 'react';
import Post from './Post';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Posts extends Component {

  state = {
    selectedId: null
  }

  mapCategories = () => {
    return this.props.categories.categories.map(category => <option key={category.id} value={category.id}>{category.attributes.name}</option>)
  }

  handleOnChange = (event) => {
    this.setState({
      selectedId: event.target.value
    })

  }
  
  

   
      
  render() {
    
    const { posts } = this.props;
    // console.log(posts)
    let filteredPosts = posts.posts
    if(this.state.selectedId !== null){
      filteredPosts = posts.posts.filter((post) => { 
        console.log(post)
        return post.attributes.category.id == this.state.selectedId})
    } 
  
    

    
    const postList = filteredPosts.map(post => {
      return (
        <h3 key={post.id}><Link to={{pathname: `/posts/${post.id}`, state:{attributes: post.attributes}}}> {post.attributes.title} </Link></h3>
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
      
        <label htmlFor="category">Filter By Category:</label>
          <select onChange={(event) => this.handleOnChange(event)} name="category_id" id="category">
             <option value="">--Please choose an option--</option>
              {this.mapCategories()}
          </select><br></br>
      
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