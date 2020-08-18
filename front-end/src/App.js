import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from './actions/postActions'
import { fetchComments } from './actions/commentActions'
import { fetchCategories } from './actions/categoryActions'
import PostsContainer from './containers/PostsContainer'

import './App.css';

class App extends Component {
  
  componentDidMount() {
    
    this.props.fetchPosts()
    this.props.fetchComments()
    this.props.fetchCategories()
  }
  
  render () {
    return (
      <div className="App">
      <PostsContainer fetchPosts={this.props.fetchPosts}/>  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    loading: state.loading,
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
