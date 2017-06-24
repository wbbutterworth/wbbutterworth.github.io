import React from 'react';
import classNames from 'classnames';
import smoothScroll from 'smooth-scroll';
import Icon from 'components/Icon';
import envelopeSVG from 'assets/icons/envelope.svg';
import fileSVG from 'assets/icons/file.svg';
import githubSVG from 'assets/icons/github.svg';
import twitterSVG from 'assets/icons/twitter.svg';

require('./style.css');

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleScrolled = this.toggleScrolled.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      isScrolled: window.scrollY > 0,
      isOpen: false,
    };
  }

  componentDidMount() {
    setInterval(this.toggleScrolled.bind(this), 200);

    smoothScroll.init({
      before: this.close.bind(this),
      easing: 'easeInOutQuad',
      selector: '.header a',
      speed: 800,
    });
  }

  toggleScrolled() {
    this.setState({ isScrolled: window.scrollY > 0 });
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  open() {
    if (!this.state.isOpen) this.setState({ isOpen: true });
  }

  close() {
    if (this.state.isOpen) this.setState({ isOpen: false });
  }

  render() {
    const classes = classNames({
      header: true,
      'header--open': this.state.isOpen,
      'header--scrolled': this.state.isScrolled,
    });

    return (
      <header className={classes} ref={container => (this.container = container)}>
        <div className="header-interface">
          <a href="#top" className="header-logo">Liam<span>Butterworth</span></a>

          <button className="header-button" onClick={this.toggleOpen}>
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="header-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>

            <li>
              <ul>
                <li><a href="mailto:liambutterworth@gmail.com"><Icon svg={envelopeSVG} /></a></li>
                <li><a href="#resume" target="_blank" rel="noopener noreferrer"><Icon svg={fileSVG} /></a></li>
                <li><a href="https://github.com/liambutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={githubSVG} /></a></li>
                <li><a href="http://twitter.com/wbbutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={twitterSVG} /></a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
