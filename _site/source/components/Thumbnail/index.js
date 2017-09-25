import React     from 'react';
import PropTypes from 'prop-types';

require( './style.css' );

class Thumbnail extends React.Component {
	render() {
		return (
			<div className="thumbnail">
				<h1 className="thumbnail-title">{ this.props.title }</h1>
				<p className="thumbnail-text">{ this.props.text }</p>
			</div>
		);
	}
}

Thumbnail.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Thumbnail;
