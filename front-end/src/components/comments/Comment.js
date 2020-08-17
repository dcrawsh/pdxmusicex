import React, { Component } from 'react'
import CommentInput from './CommentInput'

export default class Comment extends Component {
    render() {
        return (
            <div>
                {this.props.comment.content}
                <CommentInput/>
            </div>
        )
    }
}
