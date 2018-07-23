import React        from 'react';
import classNames   from 'classnames';
import SmoothScroll from 'smooth-scroll';
import Icon         from 'components/Icon';
import fileSvg      from 'assets/icons/file.svg';
import envelopeSvg  from 'assets/icons/envelope.svg';
import githubSvg    from 'assets/icons/github.svg';
import linkedinSvg  from 'assets/icons/linkedin.svg';

require( './style.css' );

class Header extends React.Component {
	constructor( props ) {
		super( props );

		this.toggleScrolled = this.toggleScrolled.bind( this );
		this.toggleOpen     = this.toggleOpen.bind( this );
		this.open           = this.open.bind( this );
		this.close          = this.close.bind( this );

		this.state = {
			isScrolled: false,
			isOpen:     false,
		};
	}

	componentDidMount() {
		this.smoothScroll = new SmoothScroll( '.header a' );
		setInterval( this.toggleScrolled, 200 );

		this.smoothScroll.init({
			speed:  800,
			offset: 80,
			easing: 'easeInOutCubic',
		});
	}

	toggleScrolled() {
		this.setState({ isScrolled: navigator.userAgent.match( /Trident|rv:11/ ) ? true : window.scrollY > 0 });
	}

	toggleOpen() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	open() {
		if ( !this.state.isOpen ) this.setState({ isOpen: true });
	}

	close() {
		if ( this.state.isOpen ) this.setState({ isOpen: false });
	}

	render() {
		const classes = classNames({
			header:             true,
			'header--open':     this.state.isOpen,
			'header--scrolled': this.state.isScrolled,
		});

		return (
			<header className={ classes }>
				<div className="header-interface">
					<a href="#top" className="header-logo" onClick={ this.close }>Liam<span>Butterworth</span></a>

					<button className="header-button" onClick={ this.toggleOpen } aria-label="Toggle navigation">
						<span />
						<span />
						<span />
					</button>
				</div>

				<nav className="header-links">
					<ul className="header-sections">
						<li><a href="#about" onClick={ this.close }>About</a></li>
						<li><a href="#work" onClick={ this.close }>Work</a></li>
						<li><a href="#contact" onClick={ this.close }>Contact</a></li>

						<li>
							<ul className="header-social">
								<li><a href="mailto:contact@liambutterworth.me"><Icon svg={ envelopeSvg } /></a></li>
								<li><a href="/liambutterworth.pdf" target="_blank" rel="noopener noreferrer"><Icon svg={ fileSvg } /></a></li>
								<li><a href="https://github.com/liambutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ githubSvg } /></a></li>
								<li><a href="https://linkedin.com/in/liam-butterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ linkedinSvg } /></a></li>
							</ul>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
