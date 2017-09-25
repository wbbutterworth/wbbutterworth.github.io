import React      from 'react';
import PropTypes  from 'prop-types';
import ClassNames from 'classnames';

require( './style.css' );

const Column = ( props ) => {
	const classes = ClassNames({
		column:                               true,
		[`column--span-${ props.span }`]:     props.span,
		[`column--small-${ props.small }`]:   props.small,
		[`column--medium-${ props.medium }`]: props.medium,
		[`column--large-${ props.large }`]:   props.large,
	});

	return (
		<div className={ classes }>{ props.children }</div>
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
