# Redux Examples
This project demonstrates the basic capabilities of Redux. The demos start with
a very basic cli example, and will move on to a cli tool, and then usage with
React or Vue.

## LinkDB
The `master` branch hold the source for the initial **LinkDB** example. It creates
a store that holds `Link` objects, which consists of a `title` and a `url`. The
store then populates its DB schema, which looks like this:
```
{
  links: [],
  watched: [],
  favs: []
}
```
As it shows, users may add or remove links, and mark links as favorites or as watched.

The driver code is in `index.js` and it runs through a quick example of using the store,
creating a subscribe listener, and displaying the state changes every time a dispatch is
made.