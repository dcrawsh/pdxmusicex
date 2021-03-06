import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {


    state = {
      comments: []
    }

    render() {
      const comments = this.props.comments;
      console.log(comments)
      const commentList = comments.map(comment => {
        return (
          
          <Comment
              key={comment.id}
              deleteComment={this.props.deleteComment}
              fetchPosts={this.props.fetchPosts}
              comment={comment}
          />
        )
      });
  
      return(
        <div>
          <h3>Comments:</h3>
          <ul>
            {commentList}
          </ul>
        </div>
      );
    }
  };
  
  export default Comments;