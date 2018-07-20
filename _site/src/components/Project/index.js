import React     from 'react';
import PropTypes from 'prop-types';
import Icon      from 'components/Icon';
import ShortID   from 'shortid';

require( './style.css' );

const Project = ( props ) => {
	const icon = require( `assets/icons/${ props.icon }.svg` );
	const tags = props.tags.split( ',' );

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

				<ul className="project-tags">
					{ tags.map( ( tag ) => (
						<li key={ ShortID.generate() }>{ tag }</li>
					) ) }
				</ul>
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
