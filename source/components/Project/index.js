import React     from 'react';
import PropTypes from 'prop-types';
import Icon      from 'components/Icon';

require( './style.css' );

const Project = ( props ) => {
	const icon = require( `assets/icons/${ props.icon }.svg` );

	return (
		<div className="project">
			<div className="project-aside">
				<a href={ props.link } target="_blank" rel="noopener">
					<Icon svg={ icon } />
				</a>
			</div>

			<div className="project-content">
				<a href={ props.link } target="_blank" rel="noopener">
					{ props.title }
				</a>

				<p>{ props.children }</p>
			</div>
		</div>
	);
};

Project.propTypes = {
	link:     PropTypes.string.isRequired,
	title:    PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Project;
