import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from 'containers/Home';
import NotFound from 'containers/NotFound';

/**
 * application container routes
 *
 * @return { element } react element
 */

const Routes = () => (

  <Router history={ browserHistory }>
    <Route path="/" component={ Home } />
    <Route path="*" component={ NotFound } />
  </Router>

);

export default Routes;
