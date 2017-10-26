/**
 * Take a subreddit and return the posts for that subreddit.
 */
export function getSubredditPosts(subreddit) {
  // This is called a 'template string'
  const apiUrl = `https://www.reddit.com/r/${subreddit}/top/.json`;
  const requestParameters = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  };

  // Calls the api
  return fetch(apiUrl, requestParameters).then((response) => {
    // turn the result into json
    return response.json();
  }).then((json) => {
    return json.data.children;
  }).then((posts) => {
    return posts;
  }).catch(e => {
    // if an error happens, print it
    console.error(`Oh fuck you shat this out: ${e.message}`);
  });
};
