import style from 'style';

const theme = [{
	featureType: 'all',
	elementType: 'labels.text.fill',

	stylers: [
		{ saturation: 36 },
		{ color: style['background-color'] },
		{ lightness: 40 },
	],
}, {
	featureType: 'all',
	elementType: 'labels.text.stroke',

	stylers: [
		{ visibility: 'on' },
		{ color: style['foreground-color'] },
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
		{ color: style['foreground-color'] },
		{ lightness: 10 },
	],
}, {
	featureType: 'administrative',
	elementType: 'geometry.stroke',

	stylers: [
		{ color: style['foreground-color'] },
		{ lightness: 10 },
		{ weight: 1.2 },
	],
}, {
	featureType: 'landscape',
	elementType: 'geometry',

	stylers: [
		{ color: style['foreground-color'] },
		{ lightness: 7 },
	],
}, {
	featureType: 'poi',
	elementType: 'geometry',

	stylers: [
		{ color: style['foreground-color'] },
		{ lightness: 12 },
	],
}, {
	featureType: 'road.highway',
	elementType: 'geometry.fill',

	stylers: [
		{ color: style['foreground-color'] },
		{ lightness: 20 },
	],
}, {
	featureType: 'road.highway',
	elementType: 'geometry.stroke',

	stylers: [
		{ color: style['foreground-color'] },
		{ lightness: 26 },
		{ weight: 0.4 },
	],
}, {
	featureType: 'road.arterial',
	elementType: 'geometry',

	stylers: [
		{ color: style['foreground-color'] },
		{ lightness: 24 },
	],
}, {
	featureType: 'road.local',
	elementType: 'geometry',

	stylers: [
		{ color: style['foreground-color'] },
		{ lightness: 22 },
	],
}, {
	featureType: 'transit',
	elementType: 'geometry',

	stylers: [
		{ color: style['foreground-color'] },
		{ lightness: 20 },
	],
}, {
	featureType: 'water',
	elementType: 'geometry',

	stylers: [
		{ color: style['foreground-color'] },
		{ lightness: 12 },
	],
}];

export default theme;
