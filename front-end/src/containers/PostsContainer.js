import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/posts/Posts'
import { postPosts } from '../actions/postActions'
import { deletePost } from '../actions/postActions'

class PostsContainer extends Component {
    render() {
        return (
            <div>
               <Posts fetchPosts={this.props.fetchPosts} posts={this.props.posts} deletePost={this.props.deletePost}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {posts: state.posts,
    categories: state.categories}
}

const mapDispatchToProps = dispatch => {
    return { postPosts: (payload) => dispatch(postPosts(payload)),
    deletePost: (payload) => dispatch(deletePost(payload))}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
