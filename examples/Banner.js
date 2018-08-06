//
// Banner
//
// :: Constructor
// :: Component Did Mount
// :: Animate
// :: Type
// :: Backspace
// :: Add Dynamic text
// :: Remove Dynamic Text
// :: Render
// :: Properties

// NOTE:
// This is the React component responsible for the parallax scrolling and typing animations for my
// portfolio banner. This can be viewed at https://liambutterworth.me

import React      from 'react';
import PropTypes  from 'prop-types';
import ClassNames from 'classnames';

require( './style.css' );

class Banner extends React.Component {

	//
	// Constructor
	//

	constructor( props ) {

		// call parent constructor with props
		super( props );

		// bind functions to the current context
		this.animate           = this.animate.bind( this );
		this.addDynamicText    = this.addDynamicText.bind( this );
		this.removeDynamicText = this.removeDynamicText.bind( this );

		// media query check for a 900px width breakpoint
		this.mediaQuery = window.matchMedia( '( min-width: 900px )' );

		// set initial state
		this.state = {
			text:      '',
			isResting: true,
		};
	}

	//
	// Mounted
	//

	componentDidMount() {

		// once mounted call animate once before anything else happens
		this.animate();

		// on a 50ms interval call the animate method
		setInterval( this.animate, 50 );

		// call the type method with static and dynamic text passed from container
		this.type( this.props.staticText, this.addDynamicText );
	}

	//
	// Animate
	//

	animate() {

		// if window width is above the defined media query breakpoint
		if ( this.mediaQuery.matches ) {

			// request animation frame from window; will animate background image
			// for a parallax scroll effect using the CSS3 translate3d function
			window.requestAnimationFrame( () => {
				if ( this.lastScrollY !== window.scrollY ) {
					this.background.style.transform = `translate3d(0, ${ window.scrollY * 0.25 }px, 0)`;
					this.lastScrollY                = window.scrollY;
				}
			});
		}
	}

	//
	// Type
	//

	type( text, callback ) {

		// turn off resting so the cursor wont blink while typing; consistent with common text editors
		this.setState({ isResting: false });

		// split text into an array if an array isnt already passed; then pull the letter to be typed
		// from the first array item
		const textArray = Array.isArray( text ) ? text : text.split( '' );
		const letter    = textArray.shift();

		// set a timeout using Math.random to simulate variations in typing speed
		setTimeout( () => {

			// add the letter to the current text string in state
			this.setState({ text: `${ this.state.text + letter }` });

			// if there are still letters to be typed recursively call this method
			// otherwise set the state back to resting so the cursor will blink again then invoke original callback
			if ( textArray.length > 0 ) {
				this.type( textArray, callback );
			} else if ( callback ) {
				this.setState({ isResting: true });
				callback();
			}
		}, Math.floor( Math.random() * 50 ) + 100 );
	}

	//
	// Backspace
	//

	backspace( count, callback ) {

		// set resting state to false so the cursor wont blink
		this.setState({ isResting: false });

		// set a non-random timeout; consistent with text editors while holding backspace
		setTimeout( () => {

			// remove the last letter from current text string in state
			this.setState({ text: this.state.text.substr( 0, this.state.text.length - 1 ) });

			// if the currect count of string letters to be removed (from dynamic text length) is greater than 1
			// decrement the count and recursively call this method; otherwise set resting back to true and invoke callback
			if ( count > 1 ) {
				this.backspace( count - 1, callback );
			} else if ( callback ) {
				this.setState({ isResting: true });
				callback();
			}
		}, 50 );
	}

	//
	// Add Dynamic Text
	//

	addDynamicText() {

		// dynamicText in the props object is passed as an array of strings; iterate over this array and
		// call the type method to type out the text string
		let index = this.dynamicText ? this.props.dynamicText.indexOf( this.dynamicText ) + 1 : 0;
		if ( index > this.props.dynamicText.length - 1 ) index = 0;
		this.dynamicText = this.props.dynamicText[index];
		this.type( ` ${ this.dynamicText }`, this.removeDynamicText );
	}

	//
	// Remove Dynamic Text
	//

	removeDynamicText() {

		// set timeout of 3 seconds to backspace over the most recently added dynamic text; call backspace
		// method with the length of the text to be removed and invoke the addDynamicText method to add the
		// next string in array
		setTimeout( () => {
			this.backspace( this.dynamicText.length + 1, this.addDynamicText );
		}, 3000 );
	}

	//
	// Render
	//

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
					<h1>
						Web&nbsp;
						<span className="banner-text-role">Developer</span>
						<span className="banner-text-role-abbr">Dev</span>
					</h1>

					<hr />
					<p>{ this.state.text }</p>
				</div>
			</div>
		);
	}
}

//
// Properties
//

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
