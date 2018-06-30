import PropTypes from 'prop-types';
import React from 'react';
import ReactTos from 'react-tos';
import { NavLink } from 'react-router-dom';

import Archive from './blog-archive__link';
import Loading from '../../components/loading/loading';
import ScrollTop from '../../helpers/scroll-top';

import './blog-landing.css';

const Blog = ({
  err,
  latest,
  loading,
}) => {
  let landingContent;
  if (loading) {
    landingContent = <Loading color="light" />;
  } else if (err) {
    landingContent = <Archive />;
  } else {
    landingContent = (
      <div>
        <div className="blog-latest__header">
          <div>
            Latest
          </div>
          <Archive />
        </div>
        <div className="blog-landing__item-title">
          {latest.title}
        </div>
        <div className="blog-landing__item-date">
          {latest.date}
        </div>
        <div className="blog-landing__item-details">
          {latest.details}
        </div>
        <div className="blog-landing__more">
          <NavLink
            onClick={ScrollTop}
            to={`blog/${encodeURI(latest.title)}`}
          >
            More...
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div className="blog-landing">
      <ReactTos
        className="blog-landing__inner"
        config={{ startingScale: 0.95 }}
      >
        <div className="blog-landing__title">
          Blog
        </div>
        <div className="blog-landing__details">
          { landingContent }
        </div>
      </ReactTos>
    </div>
  );
};

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
