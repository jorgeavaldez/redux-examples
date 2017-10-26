import { combineReducers } from 'redux';

import posts from './posts';
import settings from './settings';

export { posts, settings };

export default combineReducers({
  posts,
  settings
});