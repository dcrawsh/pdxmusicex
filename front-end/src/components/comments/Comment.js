import React, { Component } from 'react'





export default class Comment extends Component {

    handleOnClick() {
        this.props.deleteComment(this.props.comment)
        this.props.fetchPosts()
    }

    render() {
        console.log(this.props.comment)
        return (
            <div>
                {this.props.comment.content}
                <button onClick={() => this.handleOnClick()}> X </button>
            </div>
        )
    }
}
