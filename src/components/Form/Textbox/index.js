import React from 'react';
import PropTypes from 'prop-types';

/**
 * custom form textbox element
 * 
 * @param { object }   props          component properties
 * @param { string }   props.type     input type for textbox
 * @param { string }   props.id       id for input element
 * @param { string }   props.label    label element for input
 * @param { function } props.onChange event handler for change
 *
 * @return { element } react element
 */

const Textbox = ( props ) => {

  let input;

  const inputProps = {
    id:          props.id,
    onChange:    props.onChange,
    placeholder: props.placeholder,
  };

  switch ( props.type ) {

    case 'textarea':
      input = ( <textarea { ...inputProps } /> );
      break;

    default:
    case 'text':
      input = ( <input type={ props.type } { ...inputProps } /> );
      break;

  }

  return (

    <div className="form-textbox">
      <label htmlFor={ props.id }>{ props.label }</label>
      { input }
    </div>

  );

};

Textbox.defaultProps = {
  type:    'text',
  display: 'stacked',
};

Textbox.propTypes = {
  id:          PropTypes.string.isRequired,
  type:        PropTypes.string,
  label:       PropTypes.string,
  placeholder: PropTypes.string,
  onChange:    PropTypes.func,
};

export default Textbox;
