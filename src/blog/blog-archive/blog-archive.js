import PropTypes from 'prop-types';
import React from 'react';

import BlogItem from './blog-archive__item';
import Loading from '../../components/loading/loading';
import Warning from '../../components/warning/warning';

import './blog-archive.css';

const BlogList = ({
  err,
  list,
  loading,
}) => {
  let archiveElement = null;
  if (loading) {
    archiveElement = (
      <div className="blog-archive__message">
        <Loading />
      </div>
    );
  } else if (err) {
    archiveElement = (
      <div className="blog-archive__message">
        <Warning />
        <div>
          There was an error retrieving the blog archive. Please try again later.
        </div>
      </div>
    );
  } else {
    archiveElement = (
      <div className="blog-archive__list">
        {list.map(item => (BlogItem(item)))}
      </div>
    );
  }
  return (
    <div className="blog-archive">
      <div className="blog-archive__inner">
        { archiveElement }
      </div>
    </div>
  );
};

BlogList.propTypes = {
  err: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      details: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default BlogList;
