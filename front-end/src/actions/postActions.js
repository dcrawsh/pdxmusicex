// export const fetchPosts = () => {
//     return (dispatch) => {
//       dispatch({ type: 'LOADING_POSTS'})
//       fetch('http://localhost:3000/api/v1/posts').then(response => {
//         return response.json()
//       }).then(responseJSON => {
//         console.log(responseJSON)
//         dispatch({ type: 'ADD_POSTS', posts: responseJSON.data })
//       })
//     }
//   }

export const GET_POSTS_PENDING = `GET POSTS PENDING`;
export const GET_POSTS_SUCCESS = `GET POSTS SUCCESS`;
export const GET_POSTS_FAILURE = `GET POSTS FAILURE`;

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: GET_POSTS_PENDING })
    fetch('http://localhost:3000/api/v1/posts').then(response => {
      return response.json()})
      .then(responseJSON => {
        return dispatch({ type: GET_POSTS_SUCCESS, payload: responseJSON.data })
      })
      .catch(err => {
      dispatch({ type: GET_POSTS_FAILURE, err })
    })
  }
}
export const POST_POSTS_PENDING = `POST POSTS PENDING`;
export const POST_POSTS_SUCCESS = `POST POSTS SUCCESS`;
export const POST_POSTS_FAILURE = `POST POSTS FAILURE`;

export const postPosts = (post) => {
  
  let formData = {post: post}

  let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }


  console.log(post)
  
  return (dispatch) => {
    dispatch({ type: POST_POSTS_PENDING })
    fetch('http://localhost:3000/api/v1/posts', configObj)
    .then(response => {
      return dispatch({ type: POST_POSTS_SUCCESS, payload: response.json() })
    }).catch(err => {
      dispatch({ type: POST_POSTS_FAILURE, payload: err })
    })
  }
}