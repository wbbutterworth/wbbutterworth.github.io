import React from 'react';
import fileIcon from 'assets/icons/file.svg';
import githubIcon from 'assets/icons/github.svg';
import twitterIcon from 'assets/icons/twitter.svg';

require( './style.css' );

/**
 * site footer
 *
 * @return { element } react element
 */

const Footer = () => (

  <section className="footer">
    <div className="footer-inner">
      <h1>Get in touch with <a href="mailto:liambutterworth@gmail.com">liambutterworth@gmail.com</a></h1>

      <ul>
        <li><a href="#resume" target="_blank" dangerouslySetInnerHTML={{ __html: fileIcon }} /></li>
        <li><a href="https://github.com/liambutterworth" target="_blank" dangerouslySetInnerHTML={{ __html: githubIcon }} /></li>
        <li><a href="http://twitter.com/wbbutterworth" target="_blank" dangerouslySetInnerHTML={{ __html: twitterIcon }} /></li>
      </ul>
    </div>
  </section>

);

export default Footer;
