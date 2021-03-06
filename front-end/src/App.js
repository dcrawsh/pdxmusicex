import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from './actions/postActions'
import { fetchComments } from './actions/commentActions'
import { fetchCategories } from './actions/categoryActions'
import PostsContainer from './containers/PostsContainer'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import './App.css';
import PostInput from './components/posts/PostInput';
import Post from './components/posts/Post'
import Root from './components/Root'
import EditPost from './components/posts/EditPost'



class App extends Component {
  
  componentDidMount() {
    
    this.props.fetchPosts()
    this.props.fetchComments()
    this.props.fetchCategories()
  }
  
  render () {
    return (
      <>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/posts/new" exact component={PostInput}/>
          <Route path="/posts/:id" exact component={Post}/>
          <Route path="/posts/:id/edit" exact component={EditPost}/>
          <Route path="/" exact component={Root}/>
          <Route path="/about" exact component={About}/>
          <Route path="/posts" exact render={() => <PostsContainer fetchPosts={this.props.fetchPosts} /> } />
        </Switch>
      </Router>
      </>
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
