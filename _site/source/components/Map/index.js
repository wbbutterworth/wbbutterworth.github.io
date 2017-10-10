import React     from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import Marker    from 'components/Map/Marker';
import theme     from 'components/Map/theme';

require( './style.css' );

const Map = ( props ) => (
	<div className="map">
		<GoogleMap
			bootstrapURLKeys={{ key: 'AIzaSyD3Z_Y71blkA9MlIrR_4Fl0wkTN5C2CyEg' }}
			defaultCenter={ props.center }
			defaultZoom={ props.zoom }
			options={{ styles: theme }}
		>
			<Marker { ...props.marker } />
		</GoogleMap>
	</div>
);

Map.defaultProps = {
	zoom: 11,
};

Map.propTypes = {
	zoom: PropTypes.number,

	center: PropTypes.shape({
		lat: PropTypes.number.isRequired,
		lng: PropTypes.number.isRequired,
	}).isRequired,

	marker: PropTypes.shape({
		lat: PropTypes.number.isRequired,
		lng: PropTypes.number.isRequired,
	}).isRequired,
};

export default Map;
