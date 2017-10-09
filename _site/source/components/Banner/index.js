import React      from 'react';
import PropTypes  from 'prop-types';
import ClassNames from 'classnames';
import style      from 'style';

require( './style.css' );

class Banner extends React.Component {
	constructor( props ) {
		super( props );

		this.animate           = this.animate.bind( this );
		this.addDynamicText    = this.addDynamicText.bind( this );
		this.removeDynamicText = this.removeDynamicText.bind( this );
		this.mediaQuery        = window.matchMedia( `( min-width: ${ style.functions.span( 10, 'rem' ) } )` );

		this.state = {
			text:      '',
			isResting: true,
		};
	}

	componentDidMount() {
		this.animate();
		setInterval( this.animate, 50 );
		this.type( this.props.staticText, this.addDynamicText );
	}

	animate() {
		if ( this.mediaQuery.matches ) {
			window.requestAnimationFrame( () => {
				if ( this.lastScrollY !== window.scrollY ) {
					this.background.style.transform = `translate3d(0, ${ window.scrollY * 0.25 }px, 0)`;
					this.lastScrollY                = window.scrollY;
				}
			});
		}
	}

	type( text, callback ) {
		this.setState({ isResting: false });

		const textArray = Array.isArray( text ) ? text : text.split( '' );
		const letter    = textArray.shift();

		setTimeout( () => {
			this.setState({ text: `${ this.state.text + letter }` });

			if ( textArray.length > 0 ) {
				this.type( textArray, callback );
			} else if ( callback ) {
				this.setState({ isResting: true });
				callback();
			}
		}, Math.floor( Math.random() * 50 ) + 100 );
	}

	backspace( count, callback ) {
		this.setState({ isResting: false });

		setTimeout( () => {
			this.setState({ text: this.state.text.substr( 0, this.state.text.length - 1 ) });

			if ( count > 1 ) {
				this.backspace( count - 1, callback );
			} else if ( callback ) {
				this.setState({ isResting: true });
				callback();
			}
		}, 50 );
	}

	addDynamicText() {
		let index = this.dynamicText ? this.props.dynamicText.indexOf( this.dynamicText ) + 1 : 0;
		if ( index > this.props.dynamicText.length - 1 ) index = 0;
		this.dynamicText = this.props.dynamicText[index];
		this.type( ` ${ this.dynamicText }`, this.removeDynamicText );
	}

	removeDynamicText() {
		setTimeout( () => {
			this.backspace( this.dynamicText.length + 1, this.addDynamicText );
		}, 3000 );
	}

	render() {
		const classes = ClassNames({
			banner:            true,
			'banner--resting': this.state.isResting,
		});

		return (
			<div className={ classes }>
				<div className="banner-overlay" />

				<div className="banner-background">
					<img
						alt="Banner background"
						src={ this.props.image }
						ref={ ( background ) => ( this.background = background ) }
					/>
				</div>

				<div className="banner-text">
					<h1>Front-End Developer</h1>
					<hr />
					<p>{ this.state.text }</p>
				</div>
			</div>
		);
	}
}

Banner.defaultProps = {
	staticText:  '',
	dynamicText: [],
};

Banner.propTypes = {
	image:       PropTypes.node.isRequired,
	staticText:  PropTypes.string,
	dynamicText: PropTypes.arrayOf( PropTypes.string ),
};

export default Banner;
