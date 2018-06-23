import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from '../navbar/navbar-container';
import BlogArchive from './blog-archive/blog-archive-container';
import BlogItem from './blog-item/blog-item-container';
import RouteNotFound from '../router/__not-found/router__not-found-route';

import './blog.css';

const links = [
  {
    route: '/blog',
    text: 'Blog',
  },
  {
    route: '/cv',
    text: 'CV',
  },
];

export const BlogComponent = ({
  match,
}) => (
  <div>
    <Navbar
      background
      fixed={false}
      links={links}
    />
    <div className="blog">
      <Switch>
        <Route
          exact
          path={match.path}
          component={BlogArchive}
        />
        <Route
          exact
          path={`${match.path}/:title`}
          component={BlogItem}
        />
        <RouteNotFound />
      </Switch>
    </div>
  </div>
);

BlogComponent.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default withRouter(BlogComponent);
