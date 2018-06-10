import React from 'react';
import { NavLink } from 'react-router-dom';

import './blog-list.css';

const BlogListItem = item => (
  <div key={item._id}>
    <div className="Blog-list-title">
      {item.headline}
    </div>
    <div className="Blog-list-date">
      {item.date}
    </div>
    <div className="Blog-list-details">
      {item.details}
    </div>
    <div className="Blog-list-more">
      <NavLink to={`blog/${item._id}`}>
        More...
      </NavLink>
    </div>
  </div>
);
export default BlogListItem;
