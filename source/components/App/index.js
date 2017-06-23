import React     from 'react';
import PropTypes from 'prop-types';

require('./style.css');

/**
 * parent application container
 *
 * @param { object }  props          component properties
 * @param { element } props.children child components
 *
 * @return { element } react element
 */

const App = props => (
  <div id="app">{props.children}</div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
