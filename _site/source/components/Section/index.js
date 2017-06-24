import React from 'react';
import PropTypes from 'prop-types';

require('./style.css');

const Section = props => (
  <section className="section">{ props.children }</section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
