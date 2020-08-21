import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'
import { deleteComment, postComment } from '../actions/commentActions'
import CommentInput from '../components/comments/CommentInput'


class CommentsContainer extends Component {
    render() {
        return (
            <div>
                <CommentInput postComment={this.props.postComment} postId={this.props.postId}/>
                <Comments
                // comments={this.props.comments}
                // commentId={this.props.comment.id}
                deleteComment={this.props.deleteComment}
                postComment={this.props.postComment}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {deleteComment: payload => dispatch(deleteComment(payload)),
    postComment: payload => dispatch(postComment(payload))}
}



export default connect(null,mapDispatchToProps)(CommentsContainer)


