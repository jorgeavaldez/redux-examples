import { getSubredditPosts } from './';

describe('The Reddit API', async () => {
  const subreddit = 'awww';

  it('should return a list of posts', async () => {
    const posts = await getSubredditPosts(subreddit);

    expect(posts);
    expect(posts.length);
    expect(posts.length > 0);
  });

  it('posts should contain the appropriate data', async () => {
    const posts = await getSubredditPosts(subreddit);

    expect(posts);
    expect(posts.length);
    expect(posts.length > 0);

    // gets the properties for the first post in the list
    // we already checked that there's more than 0 posts in the list
    const postProperties = Object.keys(posts[0].data);

    // start at 1 because we already checked the first post
    for (let i = 1; i < posts.length; i++) {
      const currentPostProperties = Object.keys(posts[i].data);

      // Make sure that the properties in the current post match
      // up with the first post
      expect(postProperties).toEqual(currentPostProperties);
    }

    expect(postProperties).toMatchSnapshot();
  });
});