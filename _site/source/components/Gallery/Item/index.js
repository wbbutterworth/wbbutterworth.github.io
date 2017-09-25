import React from 'react';

require( './style.css' );

class GalleryItem extends React.Component {
	render() {
		return (
			<li className="gallery-item">
				{ this.props.title }
			</li>
		);
	}
}

export default GalleryItem;
