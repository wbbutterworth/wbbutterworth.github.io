import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'containers/Home';
import NotFound from 'containers/NotFound';

/**
 * application container routes
 *
 * @return { element } react element
 */

const Routes = () => (

  <Router>
    <div>
      <Route path="/" component={ Home } />
      <Route path="*" component={ NotFound } />
    </div>
  </Router>

);

export default Routes;
