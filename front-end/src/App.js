import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from './actions/postActions'
import Posts from './containers/PostsContainer'

import './App.css';

class App extends Component {
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchPosts()
  }
  
  render () {
    console.log(this.props.posts)
    return (
      <div className="App">
      
          
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
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
