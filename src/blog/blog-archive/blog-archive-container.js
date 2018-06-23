import React, { Component } from 'react';

import Archive from './blog-archive';
import BlogStore from '../store/blog-store';
import ConvertDate from '../../helpers/convert-iso-date';
import Get from '../request/get';

class BlogListContainer extends Component {
  constructor(props) {
    super(props);
    const list = BlogStore.archive;
    this.state = {
      err: false,
      list,
      loading: list.length === 0,
    };
  }
  componentDidMount = () => {
    // If there list is empty, get it and store it, both in state
    // and in the BlogStore class instance.
    if (BlogStore.archive.length === 0) {
      this.getArchive();
    }
  }
  getArchive = () => {
    Get('/blog')
      .then((list) => {
        const listLocale = list.map(item => (
          Object.assign(
            {},
            item,
            { date: ConvertDate(item.date) },
          )
        ));
        BlogStore.archive = listLocale;
        this.setState({
          list: listLocale,
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
      <Archive
        err={this.state.err}
        list={this.state.list}
        loading={this.state.loading}
      />
    );
  }
}

export default BlogListContainer;
