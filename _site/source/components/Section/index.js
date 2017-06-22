import React from 'react';
import PropTypes from 'prop-types';

require( './style.css' );

/**
 * site content section
 */

const Section = props => (

  <section className="section">
    { props.children }
  </section>

);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
