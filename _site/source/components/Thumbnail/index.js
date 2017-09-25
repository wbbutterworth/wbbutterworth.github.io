import React     from 'react';
import PropTypes from 'prop-types';

require( './style.css' );

const Thumbnail = ( props ) => (
	<div className="thumbnail">
		<h1 className="thumbnail-title">{ props.title }</h1>
		<p className="thumbnail-text">{ props.text }</p>
	</div>
);

Thumbnail.propTypes = {
	title: PropTypes.string.isRequired,
	text:  PropTypes.string.isRequired,
};

export default Thumbnail;
