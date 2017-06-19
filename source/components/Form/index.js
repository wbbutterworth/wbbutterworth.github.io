import React from 'react';
import PropTypes from 'prop-types';
import Textbox from './Textbox';

require( './style.css' );

/**
 * form element
 *
 * @param { object }   props          component properties
 * @param { element }  props.children child components
 * @param { function } props.onSubmit event handler for submit
 *
 * @return { element } react element
 */

const Form = ( props ) => (

  <form className="form" onSubmit={ props.onSubmit }>
    { props.children }
  </form>

);

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};

export { Textbox };
export default Form;
