import React from 'react';

/**
 * 
 * In React, pieces of the website are made out of Components.
 * A Component is a class that you can use like an HTML tag/element.
 * 
 * @class PostsContainer
 * @extends {React.Component}
 */
class PostsContainer extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'bepis' });
  }
}

export default PostsContainer;
