import React       from 'react';
import Icon        from 'components/Icon';
import fileSVG     from 'assets/icons/file.svg';
import githubSVG   from 'assets/icons/github.svg';
import linkedinSvg from 'assets/icons/linkedin.svg';

require( './style.css' );

const Footer = () => (
	<footer id="contact" className="footer">
		<div className="footer-inner">
			<h1 className="footer-text">Say <a href="mailto:hello@liambutterworth.me">hello@liambutterworth.me</a></h1>

			<div className="footer-links">
				<a href="/liambutterworth.pdf" target="_blank" rel="noopener noreferrer"><Icon svg={ fileSVG } /></a>
				<a href="https://github.com/liambutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ githubSVG } /></a>
				<a href="https://linkedin.com/in/liam-butterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ linkedinSvg } /></a>
			</div>
		</div>
	</footer>
);

export default Footer;
