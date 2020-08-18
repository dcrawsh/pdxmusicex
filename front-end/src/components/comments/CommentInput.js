import React, { Component } from 'react';

 export default class CommentInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: '',
      post_id: this.props.postId
    };
  };

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.postComment(this.state)
    this.setState({
      content: ''
    });
    this.props.fetchPosts()
    // this.refreshPage()
    
  }

  // refreshPage() {
  //   window.location.reload(false);
  // }

  render() {
    return (
      <div>
        <h5>New Comment</h5>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <textarea
            type="textarea" name="content"
            value={this.state.content}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};
