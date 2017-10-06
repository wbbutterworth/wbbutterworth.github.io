import React     from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';

require( './style.css' );

const API_KEY = 'AIzaSyD3Z_Y71blkA9MlIrR_4Fl0wkTN5C2CyEg';

const Map = ( props ) => (
	<div className="map">
		<GoogleMap
			bootstrapURLKeys={{ key: API_KEY }}
			defaultCenter={ props.center }
			defaultZoom={ props.zoom }
		/>
	</div>
);

Map.defaultProps = {
	zoom: 11,
};

Map.propTypes = {
	center: PropTypes.shape({
		lat: PropTypes.number.isRequired,
		lng: PropTypes.number.isRequired,
	}).isRequired,

	zoom: PropTypes.number,
};

export default Map;
