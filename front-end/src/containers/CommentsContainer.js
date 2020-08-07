import React, { Component } from 'react'
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'
export default class CommentsContainer extends Component {
    render() {
        return (
            <div>
                <CommentInput
                addComment={this.props.addComment}
                commentId={this.props.post.id}
                />
                <Comments
                comments={this.props.comments}
                // commentId={this.props.comment.id}
                deleteComment={this.props.deleteComment}
                />
            </div>
        )
    }
}
