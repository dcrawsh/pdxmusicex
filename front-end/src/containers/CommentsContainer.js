import React, { Component } from 'react'
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'


class CommentsContainer extends Component {
    render() {
        return (
            <div>
                <Comments
                comments={this.props.post.attributes.comments}
                // commentId={this.props.comment.id}
                deleteComment={this.props.deleteComment}
                />
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    return {}
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentsContainer)


