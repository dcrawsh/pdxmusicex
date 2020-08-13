import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'
import { postPosts } from '../actions/postActions'
import { deletePost } from '../actions/postActions'

class PostsContainer extends Component {
    render() {
        return (
            <div>
                <PostsInput postPosts={this.props.postPosts}/>
               <Posts posts={this.props.posts} deletePost={this.props.deletePost}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {posts: state.posts}
}

const mapDispatchToProps = dispatch => {
    return { postPosts: (payload) => dispatch(postPosts(payload)),
    deletePost: (payload) => dispatch(deletePost(payload))}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
