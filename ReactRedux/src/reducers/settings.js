import { ACTIONS, Creators } from '../actions';

/**
 * Describes our settings
 */
const INITIAL_STATE = {
  speed: 5000,
  subreddit: 'awww'
};

const settings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_SPEED:
      return {
        ...state,
        speed: action.payload.speed
      };

    case ACTIONS.CHANGE_SUBREDDIT:
      return {
        ...state,
        subreddit: action.payload.subreddit
      };
    
    default:
      return state;
  }
};

export default settings;