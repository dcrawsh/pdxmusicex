import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {

    render() {
      const { comments } = this.props;
      console.log(comments)
      const commentList = comments.map(comment => {
        return (
          <Comment
              key={comment.id}
              deleteComment={this.props.deleteComment}
              postComment={this.props.postComment}
              comment={comment}
          />
        )
      });
  
      return(
        <ul>
          {commentList}
        </ul>
      );
    }
  };
  
  export default Comments;