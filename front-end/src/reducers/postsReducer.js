
import { POST_POSTS_PENDING, POST_POSTS_SUCCESS, POST_POSTS_FAILURE, GET_POSTS_PENDING, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, DELETE_POST_PENDING, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, PATCH_POST_PENDING, PATCH_POST_SUCCESS, PATCH_POST_FAILURE} from "../actions/postActions";

const initialPostState = {
  loading: false,
  posts: [],
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
      case PATCH_POST_PENDING: {
        return {
          ...state,
        }
      }
      case PATCH_POST_SUCCESS: {
        return {
          ...state,
          posts: [ ...state.posts, payload.data]
        }
      }
      
      case PATCH_POST_FAILURE: {
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






