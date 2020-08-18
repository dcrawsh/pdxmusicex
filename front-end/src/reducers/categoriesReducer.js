import { GET_CATEGORIES_PENDING, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE  } from "../actions/categoryActions";


const initialCategoryState = {
  loading: false,
  categories: [],
}


export default function categoriessReducer (state = initialCategoryState, { type, payload }) {
    
    switch(type) {
    //   add GET_COMMENT
      
      case GET_CATEGORIES_PENDING: {
        return {
          ...state,
          loading: true
        }
      }
      case GET_CATEGORIES_SUCCESS: {
        return {
          ...state,
          loading: false,
          categories: [ ...payload],
        }
      }
      case GET_CATEGORIES_FAILURE: {
        return {
          ...state,
          loading: false
        }
      }
      default:
        return state;
    }
  }