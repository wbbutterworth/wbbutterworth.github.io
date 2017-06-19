import React from 'react';
import classNames from 'classnames';
import smoothScroll from 'smooth-scroll';

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

    this.toggleOpen = this.toggleOpen.bind( this );

    this.state = {
      isFixed: false,
      isOpen:  false,
    };

  }

  /**
   * component mounted event
   */

  componentDidMount() {

    setInterval( this.toggleFixed.bind( this ), 25 );

    smoothScroll.init({
      before:   this.toggleOpen.bind( this ),
      easing:   'easeInOutQuad',
      selector: '.nav a',
      speed:    800,
    });

  }

  /**
   * toggle sticky state
   */

  toggleFixed() {

    const rect = this.container.getBoundingClientRect();

    if ( rect.top > 0 && this.state.isFixed ) {

      this.setState({ isFixed: false });

    } else if ( rect.top <= 0 && !this.state.isFixed ) {

      this.setState({ isFixed: true });

    }

  }

  /**
   * toggle open state on mobile
   */

  toggleOpen() {

    this.setState({ isOpen: !this.state.isOpen });

  }

  /**
   * generate component markup
   *
   * @return { element } react element
   */

  render() {

    const classes = classNames({
      'nav':        true,
      'nav--open':  this.state.isOpen,
      'nav--fixed': this.state.isFixed,
    });

    // <li><a className="nav-logo" href="#app">Liam<span>Butterworth</span></a></li>
    return (

      <div className={ classes } ref={ container => this.container = container }>
        <a className="nav-logo">Liam<span>Butterworth</span></a>

        <button className="nav-button" onClick={ this.toggleOpen }>
          <span />
          <span />
          <span />
        </button>

        <nav className="nav-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

    );

  }

}

export default Nav;
