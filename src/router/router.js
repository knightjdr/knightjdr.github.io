import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CaptureRouteNotFound from './__not-found/router__not-found';

// routes
import App from '../App';
import CV from '../cv/cv';
import Missing from '../404/404';

const Routes = () => (
  <Router>
    <CaptureRouteNotFound>
      <Switch>
        <Route
          exact
          path="/"
          component={App}
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
      </Switch>
    </CaptureRouteNotFound>
  </Router>
);
export default Routes;
