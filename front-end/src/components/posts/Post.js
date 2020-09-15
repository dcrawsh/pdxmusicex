import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'
import { connect } from 'react-redux';
import findPost from '../../utils/findPostFromParams';
import { NavLink } from 'react-router-dom';



class Post extends Component {
  
  
  state = {
    post: {}
  }
  // handleOnClick() {
  //   this.props.deletePost(this.props.post);
  // }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/posts/${this.props.match.params.id}`)
    .then(response => response.json()) 
    .then(responseJSON => {
      this.setState({post: (responseJSON.data)})
    })
  } 
  

  render() {
    
    const [post, postId] = findPost(this.props)
    

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
        <NavLink className='button' to={'/posts' + '/' + postId + '/edit'}>Edit</NavLink>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {posts: state.posts}
}



export default connect(mapStateToProps)(Post)
