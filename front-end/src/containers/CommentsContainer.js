import React, { Component } from 'react'
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

const mapDispatchToProps = (dispatch) => {
    return {deletePost: payload => dispatch(payload) }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentsContainer)


