import React from 'react';
import PropTypes from 'prop-types';

require( './style.css' );

/**
 * row layout element
 *
 * @return { element } react element
 */

const Row = props => (

  <div className="row">
    { props.children }
  </div>

);

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
