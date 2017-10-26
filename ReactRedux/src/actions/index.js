/**
 * This is where we start to describe our actions
 * - Change subreddit
 * - You're going to get the reddit posts and store them in the redux store
 * - You're going to store the speed in the redux store
 */

import Action from './action';
import { getSubredditPosts } from '../api';

// Export makes it so I can import the object ACTIONS from another file
// This is called a `named export`
export const ACTIONS = {
  // Ask reddit for the posts for a subreddit
  REQUEST_POSTS: 'REQUEST_POSTS',
  // Reddit gives you back the posts
  RECEIVE_POSTS: 'RECEIVE_POSTS',
  CHANGE_SPEED: 'CHANGE_SPEED',
  CHANGE_SUBREDDIT: 'CHANGE_SUBREDDIT'
};

export const Creators = {
  requestPosts: (subreddit) => {
    return new Action(ACTIONS.REQUEST_POSTS, { subreddit });
  },
  receivePosts: (subreddit, posts) => {
    return new Action(ACTIONS.RECEIVE_POSTS, { subreddit, posts });
  },
  changeSpeed: (speed) => {
    return new Action(ACTIONS.CHANGE_SPEED, { speed });
  },
  changeSubreddit: (subreddit) => {
    return new Action(ACTIONS.CHANGE_SUBREDDIT, { subreddit });
  }
};

/**
 * - You need to do something
 * - You make an action called 'doThing'
 * - You make a reducer called 'things' to store the things that you do
 * - To do a thing, you then make a store and dispatch doThing to the store
 * - When you call dispatch, the reducer 'things' tells it how to update itself
 * 
 * Sample code
 *  dispatch(doThing());
 *  const things = store.getState().things;
 */

export const fetchPosts = (subreddit) => (dispatch) => {
  dispatch(Creators.requestPosts(subreddit));

  getSubredditPosts(subreddit).then(posts => {
    dispatch(Creators.receivePosts(subreddit, posts));
  });  
};

/**
 * Returns true if we should fetch the posts.
 * Otherwise, return false.
 * 
 * Reasons to fetch posts:
 * - if posts don't exist
 * - if posts is empty
 * - if we are on a different subreddit aka if the subreddit changes
 */
const shouldFetchPosts = (state, sub) => {
  const posts = state.posts.posts;
  const fetching = state.posts.fetching;
  const subreddit = state.settings.subreddit;

  /**
   * If posts does not exist, then YES we should fetch the posts.
   */
  if (!posts) return true;

  /**
   * If posts is empty, then YES we should fetch the posts.
   */
  if (posts.length < 1) return true;

  /**
   * If we want posts for a new subreddit.
   */
  if (sub !== subreddit) return true;

  /**
   * Otherwise, return false
   */
  return false;
};

export const fetchPostsIfNeeded = (subreddit) => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    dispatch(fetchPosts(subreddit));
  }
};