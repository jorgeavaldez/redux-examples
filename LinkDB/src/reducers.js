const Link = require('./link');
const ACTIONS = require('./actions').ACTIONS;

const combineReducers = require('redux').combineReducers;

/**
 * Reducers
 * - Defines how actions affect the state
 * - Return a new state based off of the given actions
 */

/**
 * This is an example of what our state is gonna look like
 * when we begin to add stuff. Notice that links in the favs
 * and watched categories are still in the links list.
 */
const EXAMPLE_STATE = {
  links: [
    {
      title: 'Link Movie',
      link: 'http://google.com'
    },
    {
      title: 'Link Movie 2',
      link: 'http://youtube.com'
    },
    {
      title: 'Link Movie 3',
      link: 'http://facebook.com'
    }
  ],
  favs: [
    {
      title: 'Link Movie 2',
      link: 'http://youtube.com'
    }
  ],
  watched: [
    {
      title: 'Link Movie 3',
      link: 'http://facebook.com'
    }
  ]
};

/**
 * Here's what our state looks like at the get go.
 * Exciting, isn't it?
 */
const INITIAL_STATE = {
  links: [],
  favs: [],
  watched: []
};

const links = (state = INITIAL_STATE.links, action) => {
  let title;
  let link;
  switch (action.type) {
    case ACTIONS.save:
      title = action.payload.title;
      link = action.payload.link;
      const newLink = new Link(title, link);

      const clone = [...state];
      clone.push(newLink);
      return clone;

    case ACTIONS.delete:
      title = action.payload.title;

      if (state.length < 1) return state;

      let indexToRemove = -1;
      for (let i = 0; i < state.length; i++) {
        if (state[i].title === title) indexToRemove = i;
      }

      if (indexToRemove !== -1) {
        const clone = [...state];
        clone.splice(indexToRemove, 1);
        return clone;
      }
      else return state;

    default:
      return state;
  }
};

const favs = (state = INITIAL_STATE.favs, action) => {
  switch (action.type) {
    case ACTIONS.fav:
      const { title } = action.payload;
      const clone = [...state];
      let linkToWatch = new Link(title);

      clone.push(linkToWatch.fav());
      return clone;

    default:
      return state;
  }
};

const watched = (state = INITIAL_STATE.watched, action) => {
  switch (action.type) {
    case ACTIONS.watch:
      const { title } = action.payload;
      const clone = [...state];
      let linkToWatch = new Link(title);

      clone.push(linkToWatch.watch());
      return clone;

    default:
      return state;
  }
};

// Here's one way of doing it
// If we want to make improvements, this is where we start
/*
const linkDB = (state = INITIAL_STATE, action) => {
  return {
    links: links(state.links, action),
    watched: watched(state.watched, action),
    favs: favs(state.watched, action)
  };
};
// */

// Here's the more correct way of doing it
const linkDB = combineReducers({
  links,
  favs,
  watched
});

module.exports = linkDB;