import React from 'react';

require( './style.css' );

const Content = ( props ) => (
	<section className="content">
		{ props.children }
	</section>
);

export default Content;
