const createStore = require('redux').createStore;

// Import our redux shit
const Link = require('./src/link');
const linkDB = require('./src/reducers');
const { saveLink, deleteLink, favLink, watchLink } = require('./src/actions');

// Make our data store aka the LINK DATABASE
const store = createStore(linkDB);

// Counter for every time we change the state
let change = 0;

// Log the state every time we update the state
const unsubscribe = store.subscribe(() => {
  console.log(`ITERATION ${change}`);
  console.log(store.getState());
  console.log(`\n`);
  change++;
});

// What happens here?
store.dispatch(saveLink('Link 1', 'http://google.com/1'));
store.dispatch(saveLink('Link 2', 'http://google.com/2'));
store.dispatch(saveLink('Link 3', 'http://google.com/3'));

store.dispatch(deleteLink('Link 1'));

// What should the state look like here?
store.dispatch(watchLink('Link 3'));

// And here?
store.dispatch(favLink('Link 3'));

// What about now?
store.dispatch(watchLink('Link 1'));

// Stop printing when the store gets updated
// The store is now kill
unsubscribe();