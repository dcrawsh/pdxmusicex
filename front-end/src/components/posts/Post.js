import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'
import { connect } from 'react-redux';



class Post extends Component {
  
  
  
  // handleOnClick() {
  //   this.props.deletePost(this.props.post);
  // }

  render() {
    
    const postId = this.props.match.params.id

    const post = this.props.posts.posts.find(post => post.id === postId)

    if(!post) {
      return (
        <div>
          loading post
        </div>
      )
    }

    
    
    
    
    return (
      <div className="card">
        
        <div className="card-header">
          <div className="card-header-title">
            <h4>{post.attributes.title}</h4>
          </div>
        </div>
        <p className='card-content'>
          {post.attributes.description}
          {/* <button onClick={() => this.handleOnClick()}> X </button> */}
        </p>
        <CommentsContainer comments={post.attributes.comments} postId={postId}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {posts: state.posts}
}



export default connect(mapStateToProps)(Post)
