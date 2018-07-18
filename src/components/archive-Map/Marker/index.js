import React     from 'react';
import PropTypes from 'prop-types';

require( './style.css' );

const Marker = ( props ) => (
	<a
		className="map-marker"
		href={ `http://maps.google.com?q=${ props.lat },${ props.lng }` }
		target="_blank"
	>
		My Location
	</a>
);

Marker.propTypes = {
	lat: PropTypes.number.isRequired,
	lng: PropTypes.number.isRequired,
};

export default Marker;
