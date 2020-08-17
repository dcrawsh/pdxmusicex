export const GET_COMMENTS_PENDING = `GET COMMENTS PENDING`;
export const GET_COMMENTS_SUCCESS = `GET COMMENTS SUCCESS`;
export const GET_COMMENTS_FAILURE = `GET COMMENTS FAILURE`;

export const fetchComments = () => {
  return (dispatch) => {
    dispatch({ type: GET_COMMENTS_PENDING })
    fetch('http://localhost:3000/api/v1/comments').then(response => {
      return response.json()})
      .then(responseJSON => {
        return dispatch({ type: GET_COMMENTS_SUCCESS, payload: responseJSON.data })
      })
      .catch(err => {
      dispatch({ type: GET_COMMENTS_FAILURE, err })
    })
  }
}

export const POST_COMMENT_PENDING = `POST COMMENT PENDING`;
export const POST_COMMENT_SUCCESS = `POST COMMENT SUCCESS`;
export const POST_COMMENT_FAILURE = `POST COMMENT FAILURE`;

export const postComment = (comment) => {
  
  let formData = {comment: comment}

  let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }


  console.log(comment)
  
  return (dispatch) => {
    dispatch({ type: POST_COMMENT_PENDING })
    fetch('http://localhost:3000/api/v1/comments', configObj)
    .then(response => response.json()) 
    .then(responseJSON => {
      return dispatch({ type: POST_COMMENT_SUCCESS, payload: responseJSON })
    }).catch(err => {
      dispatch({ type: POST_COMMENT_FAILURE, payload: err })
    })
  }
}
export const DELETE_COMMENT_PENDING = `DELETE COMMENT PENDING`;
export const DELETE_COMMENT_SUCCESS = `DELETE COMMENT SUCCESS`;
export const DELETE_COMMENT_FAILURE = `DELETE COMMENT FAILURE`;

export const deleteComment = (comment) => {
  
  // let formData = {post: post}

  let configObj = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
  }


  console.log(comment)
  
  return (dispatch) => {
    dispatch({ type: DELETE_COMMENT_PENDING })
    fetch(`http://localhost:3000/api/v1/comments/${comment.id}`, configObj)
    .then(response => response.json()) 
    .then(responseJSON => {
      console.log(responseJSON)
      return dispatch({ type: DELETE_COMMENT_SUCCESS, payload: responseJSON })
    }).catch(err => {
      dispatch({ type: DELETE_COMMENT_FAILURE, payload: err })
    })
  }
}