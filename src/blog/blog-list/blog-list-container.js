import React, { Component } from 'react';

import BlogList from './blog-list';
import Sample from './sample-blog';

class BlogListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: Sample,
      status: {
        error: false,
        isLoaded: true,
        isLoading: false,
      },
    };
  }
  render() {
    return (
      <BlogList
        list={this.state.list}
        status={this.state.status}
      />
    );
  }
}

export default BlogListContainer;
