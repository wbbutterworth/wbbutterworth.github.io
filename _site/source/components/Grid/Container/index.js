import React     from 'react';
import propTypes from 'prop-types';

require( './style.css' );

const Container = ( props ) => (
	<div className="container">
		{ props.children }
	</div>
);

Container.propTypes = {
	children: propTypes.node.isRequired,
};

export default Container;
