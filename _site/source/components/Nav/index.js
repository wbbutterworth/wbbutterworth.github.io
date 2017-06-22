import React from 'react';
import classNames from 'classnames';
import smoothScroll from 'smooth-scroll';
import envelopeIcon from 'assets/icons/envelope.svg';
import fileIcon from 'assets/icons/file.svg';
import githubIcon from 'assets/icons/github.svg';
import twitterIcon from 'assets/icons/twitter.svg';

require( './style.css' );

/**
 * site navigation
 */

class Nav extends React.Component {

  /**
   * setup component
   *
   * @param { object } props component properties
   */

  constructor( props ) {

    super( props );

    this.toggleScrolled = this.toggleScrolled.bind( this );
    this.toggleOpen     = this.toggleOpen.bind( this );
    this.open           = this.open.bind( this );
    this.close          = this.close.bind( this );

    this.state = {
      isScrolled: window.scrollY > 0,
      isOpen:     false,
    };

  }

  /**
   * component mounted event
   */

  componentDidMount() {

    setInterval( this.toggleScrolled.bind( this ), 200 );

    smoothScroll.init({
      before:   this.close.bind( this ),
      easing:   'easeInOutQuad',
      selector: '.nav a',
      speed:    800,
    });

  }

  toggleScrolled() {

    this.setState({ isScrolled: window.scrollY > 0 });

  }

  /**
   * toggle nav state
   */

  toggleOpen() {

    this.setState({ isOpen: !this.state.isOpen });

  }

  /**
   * open nav
   */

  open() {

    if ( !this.state.isOpen ) this.setState({ isOpen: true });

  }

  /**
   * close nav
   */

  close() {

    if ( this.state.isOpen ) this.setState({ isOpen: false });

  }

  /**
   * generate component markup
   *
   * @return { element } react element
   */

  render() {

    const classes = classNames({
      'nav':           true,
      'nav--open':     this.state.isOpen,
      'nav--scrolled': this.state.isScrolled,
    });

    return (

      <div className={ classes } ref={ container => this.container = container }>
        <div className="nav-interface">
          <a href="#app" className="nav-logo">Liam<span>Butterworth</span></a>

          <button className="nav-button" onClick={ this.toggleOpen }>
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="nav-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>

            <li>
              <ul>
                <li><a href="mailto:liambutterworth@gmail.com" dangerouslySetInnerHTML={{ __html: envelopeIcon }} /></li>
                <li><a href="#resume" target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: fileIcon }} /></li>
                <li><a href="https://github.com/liambutterworth" target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: githubIcon }} /></li>
                <li><a href="http://twitter.com/wbbutterworth" target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: twitterIcon }} /></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

    );

  }

}

export default Nav;
