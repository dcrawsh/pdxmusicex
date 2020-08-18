import React, { Component } from 'react'





export default class Comment extends Component {

    handleOnClick() {
        this.props.deleteComment(this.props.comment)
        // this.refreshPage()
    }

    // refreshPage() {
    //     window.location.reload(false);
    //   }


    render() {
        return (
            <div>
                {this.props.comment.content}
                <button onClick={() => this.handleOnClick()}> X </button>
                {/* <CommentInput postId={this.props.comment.post_id} postComment={this.props.postComment}/> */}
            </div>
        )
    }
}
