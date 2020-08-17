// const postsReducer = (state = { posts:[], loading:false }, action) => {
//     switch(action.type) {
//         case 'LOADING_POSTS':
//             return {
//                 ...state, posts: [...state.posts], loading: true
//             }
//         case 'ADD_POSTS':
//             return {
//                 ...state, posts: action.posts, loading: false
//             }
//         default:
//             return state;
//     }
// }

// export default postsReducer;

import { combineReducers } from 'redux';



import { POST_POSTS_PENDING, POST_POSTS_SUCCESS, POST_POSTS_FAILURE, GET_POSTS_PENDING, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, DELETE_POST_PENDING, DELETE_POST_SUCCESS, DELETE_POST_FAILURE } from "../actions/postActions";
// import { POST_COMMENT_PENDING, POST_COMMENT_SUCCESS, POST_COMMENT_FAILURE, GET_COMMENTS_PENDING, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE, DELETE_COMMENT_PENDING, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE } from "../actions/commentActions";

const initialPostState = {
  loading: false,
  posts: [],
}
const initialCommentState = {
  loading: false,
  comments: [],
}




export default function postsReducer(state = initialPostState, { type, payload }) {
    
    switch(type) {
      case GET_POSTS_PENDING: {
        return {
          ...state,
          loading: true
        }
      }
      case GET_POSTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          posts: [...payload]
        }
      }
      case GET_POSTS_FAILURE: {
        return {
          ...state,
          loading: false,
        }
      }
      case POST_POSTS_PENDING: {
        return {
          ...state,
        }
      }
      case POST_POSTS_SUCCESS: {
        return {
          ...state,
          posts: [ ...state.posts, payload.data],
        }
      }
      case POST_POSTS_FAILURE: {
        return {
          ...state,
        }
      }
      case DELETE_POST_PENDING: {
        return {
          ...state,
          loading: true
        }
      }
      case DELETE_POST_SUCCESS: {
        return {
          ...state,
          loading: false,
          posts: [...payload.data]
        }
      }
      case DELETE_POST_FAILURE: {
        return {
          ...state,
          loading: false,
        }
      }
      default:
        return state;
    }
}

// function commentsReducer (state = initialCommentState, { type, payload }) {
    
//   switch(type) {
//     case POST_COMMENT_PENDING: {
//       return {
//         ...state,
//       }
//     }
//     case POST_COMMENT_SUCCESS: {
//       return {
//         ...state,
//         comments: [ ...state.comments, payload.data],
//       }
//     }
//     case POST_COMMENT_FAILURE: {
//       return {
//         ...state,
//       }
//     }
//     case DELETE_COMMENT_PENDING: {
//       return {
//         ...state,
//         loading: true
//       }
//     }
//     case DELETE_COMMENT_SUCCESS: {
//       return {
//         ...state,
//         loading: false,
//         comments: [...payload.data]
//       }
//     }
//     case DELETE_COMMENT_FAILURE: {
//       return {
//         ...state,
//         loading: false,
//       }
//     }
//     default:
//       return state;
//   }
// }

// const rootReducer = combineReducers({
//   posts: postsReducer,
//   comments: commentsReducer
// })

// export default rootReducer;

