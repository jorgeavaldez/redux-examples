import { ACTIONS, Creators } from '../actions';

const INITIAL_STATE = {
  posts: [],
  fetching: false
};

/**
 * Our Posts reducer
 * Accepts an action and the state and returns the new state
 * as the result of that action.
 */
const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_POSTS:  
      return {
        ...state,
        fetching: true
      };

    case ACTIONS.RECEIVE_POSTS:  
      const posts = action.payload.posts;

      return {
        ...state,
        posts,
        fetching: false
      };

    default:
      return state;
  }
};

export default posts;