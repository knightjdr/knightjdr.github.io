import PropTypes from 'prop-types';
import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  GooglePlusIcon,
  GooglePlusShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

import './blog-item__share.css';

const Share = ({
  title,
}) => (
  <div className="blog-item__share">
    <div>
      Share:
    </div>
    <FacebookShareButton
      className="blog-item__share-button"
      quote={title}
      url={`jamesknight.ca/blog/${encodeURI(title)}`}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <GooglePlusShareButton
      className="blog-item__share-button"
      url={`jamesknight.ca/blog/${encodeURI(title)}`}
    >
      <GooglePlusIcon size={32} round />
    </GooglePlusShareButton>
    <TwitterShareButton
      className="blog-item__share-button"
      title={title}
      url={`jamesknight.ca/blog/${encodeURI(title)}`}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <EmailShareButton
      className="blog-item__share-button"
      subject={title}
      url={`jamesknight.ca/blog/${encodeURI(title)}`}
    >
      <EmailIcon size={32} round />
    </EmailShareButton>
  </div>
);

Share.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Share;
