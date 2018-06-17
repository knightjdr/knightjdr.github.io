import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from '../navbar/navbar-container';
import BlogList from './blog-list/blog-list-container';
import RouteNotFound from '../router/__not-found/router__not-found-route';

import './blog.css';

const links = [
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
    <div className="Blog-container">
      <Switch>
        <Route
          exact
          path={match.path}
          component={BlogList}
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
