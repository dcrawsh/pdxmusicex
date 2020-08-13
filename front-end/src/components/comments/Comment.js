import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div>
                {this.props.comment.content}
            </div>
        )
    }
}
