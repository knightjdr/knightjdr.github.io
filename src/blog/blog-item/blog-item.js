/* eslint react/no-danger: 0 */
import PropTypes from 'prop-types';
import React from 'react';

import Loading from '../../components/loading/loading';
import Share from './__share/blog-item__share';
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
        <div className="blog-item__article-header">
          <div className="blog-item__article-title">
            <div className="blog-item__article-title-inner">
              {item.title}
            </div>
          </div>
          {
            item.src &&
            <div className="blog-item__article-img-container">
              <img
                alt={item.imgAlt}
                className="blog-item__article-img"
                size={item.sizes}
                src={item.src}
                srcSet={item.srcset}
              />
            </div>
          }
          {
            item.imgCredit &&
            <div className="blog-item__article-img-credit">
              {item.imgCredit}
            </div>
          }
        </div>
        <article className="blog-item__article-inner">
          <Share title={item.title} />
          <div className="blog-item__article-date">
            {item.date}
          </div>
          <div className="blog-item__article-details">
            <div dangerouslySetInnerHTML={{ __html: item.html }} />
          </div>
        </article>
      </div>
    );
  }
  return (
    <div className="blog-item">
      { itemElement }
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
    imgAlt: PropTypes.string,
    imgCredit: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcset: PropTypes.string,
    title: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogItem;
