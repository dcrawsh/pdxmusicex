import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from './actions/postActions'
import { fetchComments } from './actions/commentActions'
import PostsContainer from './containers/PostsContainer'

import './App.css';

class App extends Component {
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchPosts()
    this.props.fetchComments()
  }
  
  render () {
    console.log(this.props.posts)
    return (
      <div className="App">
      <PostsContainer/>  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
