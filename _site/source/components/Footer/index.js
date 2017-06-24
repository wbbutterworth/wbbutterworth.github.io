import React from 'react';
import Icon from 'components/Icon';
import fileSVG from 'assets/icons/file.svg';
import githubSVG from 'assets/icons/github.svg';
import twitterSVG from 'assets/icons/twitter.svg';

require('./style.css');

const Footer = () => (
  <section className="footer">
    <div className="footer-inner">
      <h1>Get in touch with <a href="mailto:liambutterworth@gmail.com">liambutterworth@gmail.com</a></h1>

      <ul>
        <li><a href="#resume" target="_blank" rel="noopener noreferrer"><Icon svg={fileSVG} /></a></li>
        <li><a href="https://github.com/liambutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={githubSVG} /></a></li>
        <li><a href="http://twitter.com/wbbutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={twitterSVG} /></a></li>
      </ul>
    </div>
  </section>
);

export default Footer;
