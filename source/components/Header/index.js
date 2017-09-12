import React        from 'react';
import classNames   from 'classnames';
import smoothScroll from 'smooth-scroll';
import Icon         from 'components/Icon';
import envelopeSvg  from 'assets/icons/envelope.svg';
import fileSvg      from 'assets/icons/file.svg';
import githubSvg    from 'assets/icons/github.svg';
import twitterSvg   from 'assets/icons/twitter.svg';

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
		setInterval( this.toggleScrolled, 200 );

		smoothScroll.init({
			before:   this.close,
			easing:   'easeInOutQuad',
			selector: '.header a',
			speed:    800,
		});
	}

	toggleScrolled() {
		this.setState({ isScrolled: window.scrollY > 0 });
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
					<a href="#top" className="header-logo">Liam<span>Butterworth</span></a>

					<button className="header-button" onClick={ this.toggleOpen }>
						<span />
						<span />
						<span />
					</button>
				</div>

				<nav className="header-links">
					<ul className="header-sections">
						<li><a href="#about">About</a></li>
						<li><a href="#work">Work</a></li>
						<li><a href="#contact">Contact</a></li>

						<li>
							<ul className="header-social">
								<li><a href="mailto:liambutterworth@gmail.com"><Icon svg={ envelopeSvg } /></a></li>
								<li><a href="#resume" target="_blank" rel="noopener noreferrer"><Icon svg={ fileSvg } /></a></li>
								<li><a href="https://github.com/liambutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ githubSvg } /></a></li>
								<li><a href="http://twitter.com/wbbutterworth" target="_blank" rel="noopener noreferrer"><Icon svg={ twitterSvg } /></a></li>
							</ul>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
