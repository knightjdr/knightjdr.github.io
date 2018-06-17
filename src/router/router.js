import { AnimatedSwitch } from 'react-router-transition';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CaptureRouteNotFound from './__not-found/router__not-found';

// routes
import App from '../App';
import Blog from '../blog/blog';
import CV from '../cv/cv';
import Missing from '../404/404';

import './router.css';

const Routes = () => (
  <Router>
    <CaptureRouteNotFound>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch"
      >
        <Route
          exact
          path="/"
          component={App}
        />
        <Route
          exact
          path="/blog"
          component={Blog}
        />
        <Route
          exact
          path="/cv"
          component={CV}
        />
        <Route
          path="*"
          component={Missing}
        />
      </AnimatedSwitch>
    </CaptureRouteNotFound>
  </Router>
);
export default Routes;
