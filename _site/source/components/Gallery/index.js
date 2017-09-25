import React       from 'react';
import PropTypes   from 'prop-types';
import GalleryItem from './Item';

require( './style.css' );

class Gallery extends React.Component {
	render() {
		return (
			<ul className="gallery">
				{ this.props.children }
			</ul>
		);
	}
}

Gallery.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Gallery;
export { GalleryItem };
