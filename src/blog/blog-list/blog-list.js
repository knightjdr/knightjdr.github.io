import PropTypes from 'prop-types';
import React from 'react';

import BlogListItem from './blog-list-item';
import Loading from '../../components/loading/loading';
import Warning from '../../components/warning/warning';

import './blog-list.css';

const BlogList = ({
  list,
  status,
}) => {
  let blogListElement = null;
  if (status.isLoading) {
    blogListElement = (
      <div className="Blog-list-message">
        <Loading />
      </div>
    );
  } else if (status.error) {
    blogListElement = (
      <div className="Blog-list-message">
        <Warning />
        <div>
          There was an error retrieving the blog archive. Please try again later.
        </div>
      </div>
    );
  } else {
    blogListElement = (
      <div className="Blog-list-content">
        {list.map(item => (BlogListItem(item)))}
      </div>
    );
  }
  return (
    <div className="Blog-list-container">
      { blogListElement }
    </div>
  );
};

BlogList.defaultProps = {
  list: [],
};

BlogList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      date: PropTypes.string,
      details: PropTypes.string,
      headline: PropTypes.string,
    }),
  ),
  status: PropTypes.shape({
    error: PropTypes.bool,
    isLoaded: PropTypes.bool,
    isLoading: PropTypes.bool,
  }).isRequired,
};

export default BlogList;
