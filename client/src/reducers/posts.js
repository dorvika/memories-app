import {
  FETCH_ALL,
  FETCH_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
} from "../constans/actionTypes";

export const postReducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case END_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case FETCH_ALL: {
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    }
    case FETCH_BY_SEARCH: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case FETCH_POST: {
      return {
        ...state,
        post: action.payload,
      };
    }
    case CREATE_POST: {
      return { ...state, posts: [...state.posts, action.payload] };
    }
    case UPDATE_POST:
    case LIKE_POST: {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    }

    default:
      return state;
  }
};
