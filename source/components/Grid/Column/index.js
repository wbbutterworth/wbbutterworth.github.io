import React      from 'react';
import PropTypes  from 'prop-types';
import ClassNames from 'classnames';

require( './style.css' );

const Column = ( props ) => {
	const classes = ClassNames({
		'grid-column':                             true,
		[`grid-column--span-${ props.span }`]:     props.span,
		[`grid-column--small-${ props.small }`]:   props.small,
		[`grid-column--medium-${ props.medium }`]: props.medium,
		[`grid-column--large-${ props.large }`]:   props.large,
	});

	return (
		<div className={ classes }>
			{ props.children }
		</div>
	);
};

Column.defaultProps = {
	span:   "",
	small:  "",
	medium: "",
	large:  "",
};

Column.propTypes = {
	children: PropTypes.node.isRequired,
	span:     PropTypes.string,
	small:    PropTypes.string,
	medium:   PropTypes.string,
	large:    PropTypes.string,
};

export default Column;
