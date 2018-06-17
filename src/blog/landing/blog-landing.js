import PropTypes from 'prop-types';
import React from 'react';
import ReactTos from 'react-tos';

import Loading from '../../components/loading/loading';

import './blog-landing.css';

const Blog = ({
  err,
  latest,
  loading,
}) => (
  <div className="blog-landing">
    <ReactTos
      className="blog-landing__inner"
      config={{ startingScale: 0.95 }}
    >
      <div className="blog-landing__title">
        Blog
      </div>
      <div className="blog-landing__details">
        <Loading color="light" />
      </div>
    </ReactTos>
  </div>
);

Blog.defaultProps = {
  latest: null,
};

Blog.propTypes = {
  err: PropTypes.bool.isRequired,
  latest: PropTypes.shape({
    date: PropTypes.string,
    details: PropTypes.string,
    title: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
};

export default Blog;
