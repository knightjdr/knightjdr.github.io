import PropTypes from 'prop-types';
import React from 'react';
import Loading from '../../components/loading/loading';
import Warning from '../../components/warning/warning';

import './blog-item.css';

const BlogItem = ({
  err,
  item,
  loading,
  title,
}) => {
  let itemElement = null;
  if (loading) {
    itemElement = (
      <div className="blog-item__message">
        <Loading />
      </div>
    );
  } else if (err) {
    itemElement = (
      <div className="blog-item__message">
        <Warning />
        <div>
          There was an error retrieving the article titled: &quot;{decodeURI(title)}&quot;.
          Please try again later.
        </div>
      </div>
    );
  } else {
    itemElement = (
      <div className="blog-item__article">
        article
      </div>
    );
  }
  return (
    <div className="blog-item">
      <div className="blog-item__inner">
        { itemElement }
      </div>
    </div>
  );
};

BlogItem.defaultProps = {
  item: null,
};

BlogItem.propTypes = {
  err: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    date: PropTypes.string,
    details: PropTypes.string,
    title: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogItem;
