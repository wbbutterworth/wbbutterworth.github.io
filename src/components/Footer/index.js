import React       from 'react';
import Icon        from 'components/Icon';
import fileSVG     from 'assets/icons/file.svg';
import githubSVG   from 'assets/icons/github.svg';
import twitterSVG  from 'assets/icons/twitter.svg';
import linkedinSvg from 'assets/icons/linkedin.svg';

require( './style.css' );

const Footer = () => (
	<footer id="contact" className="footer">
		<div className="footer-inner">
			<h1 className="footer-text">Say hello,<br /><a href="mailto:wbbutterworth@gmail.com">wbbutterworth@gmail.com</a></h1>

			<div className="footer-links">
				<a href="/liambutterworth.pdf" target="_blank" rel="noopener noreferrer"><Icon svg={ fileSVG } /></a>
				<a href="https://github.com/wbbutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ githubSVG } /></a>
				<a href="https://linkedin.com/in/wbbutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ linkedinSvg } /></a>
				{/*<a href="http://twitter.com/wbbutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ twitterSVG } /></a>*/}
			</div>
		</div>
	</footer>
);

export default Footer;
