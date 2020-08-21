import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'
import { deleteComment, postComment } from '../actions/commentActions'
import CommentInput from '../components/comments/CommentInput'
import { fetchPosts } from '../actions/postActions'


class CommentsContainer extends Component {
    render() {
        return (
            <div>
                <CommentInput fetchPosts={this.props.fetchPosts}
                postComment={this.props.postComment} postId={this.props.postId}/>
                <Comments
                comments={this.props.comments}
                // commentId={this.props.comment.id}
                deleteComment={this.props.deleteComment}
                postComment={this.props.postComment}
                fetchPosts={this.props.fetchPosts}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {deleteComment: payload => dispatch(deleteComment(payload)),
    fetchPosts: payload => dispatch(fetchPosts()),
    postComment: payload => dispatch(postComment(payload))}
}



export default connect(null,mapDispatchToProps)(CommentsContainer)


