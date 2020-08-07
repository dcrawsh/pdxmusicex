import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsInput from '../components/posts/PostInput'
import Posts from '../components/posts/Posts'

class PostsContainer extends Component {
    render() {
        return (
            <div>
                <PostsInput/>
               <Posts posts={this.props.posts}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {posts: state.posts}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
