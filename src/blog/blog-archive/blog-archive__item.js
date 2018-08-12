import React from 'react';
import { NavLink } from 'react-router-dom';

import ScrollTop from '../../helpers/scroll-top';

import './blog-archive.css';

const BlogItem = item => (
  <div key={item.title}>
    <div className="blog-archive__list-title">
      {item.title}
    </div>
    <div className="blog-archive__list-date">
      {item.date}
    </div>
    <div className="blog-archive__list-details">
      {item.details}
    </div>
    <div className="blog-archive__list-more">
      <NavLink
        onClick={ScrollTop}
        to={`blog/${encodeURI(item.title)}`}
      >
        More...
      </NavLink>
    </div>
  </div>
);
export default BlogItem;
