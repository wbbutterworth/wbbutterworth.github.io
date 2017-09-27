import React     from 'react';
import PropTypes from 'prop-types';

require( './style.css' );

const Project = ( props ) => (
	<div className="project">
		<a className="project-thumbnail" href={ props.link } target="_blank" rel="noopener">
			<h1 className="project-title">{ props.title }</h1>
			<p className="project-tagline">{ props.tagline }</p>
		</a>

		<div className="project-description">{ props.children }</div>
	</div>
);

Project.propTypes = {
	link:     PropTypes.string.isRequired,
	title:    PropTypes.string.isRequired,
	tagline:  PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Project;
