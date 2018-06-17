import React, { Component } from 'react';

import BlogLanding from './blog-landing';
import BlogStore from '../store/blog-store';
import ConvertISODate from '../../helpers/convert-iso-date';
import Get from '../request/get';

class BlogLandingContainer extends Component {
  constructor(props) {
    super(props);
    const latest = BlogStore.latestEntry;
    this.state = {
      err: false,
      latest,
      loading: !latest,
    };
  }
  componentDidMount = () => {
    // If there is no latest blog entry, get it and store it, both in state
    // and in the BlogStore class instance.
    if (!BlogStore.latestEntry) {
      this.getLatest();
    }
  }
  getLatest = () => {
    Get('/blog/latest')
      .then((entry) => {
        ConvertISODate(entry.latest.date);
        BlogStore.latestEntry = entry.latest;
        this.setState({
          latest: Object.assign({}, entry.latest),
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          err: true,
          loading: false,
        });
      });
  }
  render() {
    return (
      <BlogLanding
        err={this.state.err}
        latest={this.state.latest}
        loading={this.state.loading}
      />
    );
  }
}

export default BlogLandingContainer;
