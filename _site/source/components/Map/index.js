import React     from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import style     from 'style';

require( './style.css' );

const API_KEY = 'AIzaSyD3Z_Y71blkA9MlIrR_4Fl0wkTN5C2CyEg';

const styles = [{
	featureType: 'all',
	elementType: 'labels.text.fill',

	stylers: [
		{ saturation: 36 },
		{ color: style.variables['background-color'] },
		{ lightness: 40 },
	],
}, {
	featureType: 'all',
	elementType: 'labels.text.stroke',

	stylers: [
		{ visibility: 'on' },
		{ color: style.variables['foreground-color'] },
		{ lightness: 20 },
	],
}, {
	featureType: 'all',
	elementType: 'labels.icon',

	stylers: [
		{ visibility: 'off' },
	],
}, {
	featureType: 'administrative',
	elementType: 'geometry.fill',

	stylers: [
		{ color: style.variables['foreground-color'] },
		{ lightness: 10 },
	],
}, {
	featureType: 'administrative',
	elementType: 'geometry.stroke',

	stylers: [
		{ color: style.variables['foreground-color'] },
		{ lightness: 10 },
		{ weight: 1.2 },
	],
}, {
	featureType: 'landscape',
	elementType: 'geometry',

	stylers: [
		{ color: style.variables['foreground-color'] },
		{ lightness: 7 },
	],
}, {
	featureType: 'poi',
	elementType: 'geometry',

	stylers: [
		{ color: style.variables['foreground-color'] },
		{ lightness: 12 },
	],
}, {
	featureType: 'road.highway',
	elementType: 'geometry.fill',

	stylers: [
		{ color: style.variables['foreground-color'] },
		{ lightness: 20 },
	],
}, {
	featureType: 'road.highway',
	elementType: 'geometry.stroke',

	stylers: [
		{ color: style.variables['foreground-color'] },
		{ lightness: 26 },
		{ weight: 0.4 },
	],
}, {
	featureType: 'road.arterial',
	elementType: 'geometry',

	stylers: [
		{ color: style.variables['foreground-color'] },
		{ lightness: 24 },
	],
}, {
	featureType: 'road.local',
	elementType: 'geometry',

	stylers: [
		{ color: style.variables['foreground-color'] },
		{ lightness: 22 },
	],
}, {
	featureType: 'transit',
	elementType: 'geometry',

	stylers: [
		{ color: style.variables['foreground-color'] },
		{ lightness: 20 },
	],
}, {
	featureType: 'water',
	elementType: 'geometry',

	stylers: [
		{ color: style.variables['foreground-color'] },
		{ lightness: 12 },
	],
}];

const Map = ( props ) => (
	<div className="map">
		<GoogleMap
			bootstrapURLKeys={{ key: API_KEY }}
			defaultCenter={ props.center }
			defaultZoom={ props.zoom }
			options={{ styles }}
		>
			<a
				className="map-marker"
				lat={ props.marker.lat }
				lng={ props.marker.lng }
				href={ `http://maps.google.com?q=${ props.marker.lat },${ props.marker.lng }` }
				target="_blank"
			>
				My Location
			</a>
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
