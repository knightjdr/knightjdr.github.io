import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Item from './blog-item';
import BlogStore from '../store/blog-store';
import ConvertDate from '../../helpers/convert-iso-date';
import Get from '../request/get';

class BlogItemContainer extends Component {
  constructor(props) {
    super(props);
    const { title } = this.props.match.params;
    const item = this.checkItem(title, BlogStore.item);
    this.state = {
      err: false,
      item,
      loading: !item,
      title,
    };
  }
  componentDidMount = () => {
    // If there is no selected item, get it and store it, both in state
    // and in the BlogStore class instance.
    if (!this.state.item) {
      this.getItem(this.state.title);
    }
  }
  getItem = (title) => {
    Get(`/blog/${title}`)
      .then((entry) => {
        const entryLocale = Object.assign(
          {},
          entry,
          { date: ConvertDate(entry.date) },
        );
        BlogStore.item = entryLocale;
        this.setState({
          item: entryLocale,
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
  checkItem = (title, storedItem) => {
    if (!storedItem) {
      return null;
    } else if (storedItem.title === decodeURI(title)) {
      return storedItem;
    }
    return null;
  }
  render() {
    return (
      <Item
        err={this.state.err}
        item={this.state.item}
        loading={this.state.loading}
        title={this.state.title}
      />
    );
  }
}

BlogItemContainer.defaultProps = {
  match: {
    params: {
      title: null,
    },
  },
};

BlogItemContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default BlogItemContainer;
