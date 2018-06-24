import PropTypes from 'prop-types';
import React from 'react';

import BannerLeft from './__banner/blog-archive__banner-left';
import BannerRight from './__banner/blog-archive__banner-right';
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
        <div className="blog-item__list-header">
          <BannerLeft />
          <div className="blog-item__list-banner-grass" />
          <BannerRight />
        </div>
        <div className="blog-archive__list-inner">
          {list.map(item => (BlogItem(item)))}
        </div>
      </div>
    );
  }
  return (
    <div className="blog-archive">
      { archiveElement }
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
