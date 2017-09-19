import React      from 'react';
import Icon       from 'components/Icon';
import fileSVG    from 'assets/icons/file.svg';
import githubSVG  from 'assets/icons/github.svg';
import twitterSVG from 'assets/icons/twitter.svg';

require( './style.css' );

const Footer = () => (
	<footer className="footer">
		<div className="footer-inner">
			<h1 className="footer-text">Say <a href="mailto:hello@liambutterworth.com">hello@liambutterworth.com</a></h1>

			<div className="footer-links">
				<a href="#resume" target="_blank" rel="noopener noreferrer"><Icon svg={ fileSVG } /></a>
				<a href="https://github.com/liambutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ githubSVG } /></a>
				<a href="http://twitter.com/wbbutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ twitterSVG } /></a>
			</div>
		</div>
	</footer>
);

export default Footer;
