import { AnimatedSwitch } from 'react-router-transition';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CaptureRouteNotFound from './capture-not-found';

// routes
import App from '../App';
import Missing from '../404/404';

import './router.css';

const Routes = () => (
  <Router>
    <CaptureRouteNotFound>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route
          exact
          path="/"
          component={App}
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
