import React     from 'react';
import PropTypes from 'prop-types';
import Row       from './Row';
import Column    from './Column';

require( './style.css' );

const Grid = ( props ) => (
	<div className="grid">
		{ props.children }
	</div>
);

Grid.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Grid;
export { Row, Column };
