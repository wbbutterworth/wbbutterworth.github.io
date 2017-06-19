import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

require( './style.css' );

/**
 * animated top level banner
 *
 * @extends React.Component
 */

class Banner extends React.Component {

  /**
   * setup component
   *
   * @param { object } props       component properties
   * @param { string } props.image path to image source
   * @param { string } props.text  static banner text
   * @param { array }  props.words array of words to animate at the end of text
   */

  constructor( props ) {

    super( props );

    this.state = {
      text:      '',
      isResting: true,
    };

  }

  /**
   * handle component mounted event
   */

  componentDidMount() {

    this.animate();
    setInterval( this.animate.bind( this ), 50 );
    this.type( this.props.text, this.addWord.bind( this ) );

  }

  /**
   * handle parallax scroll
   */

  animate() {

    window.requestAnimationFrame( () => {

      if ( this.lastScrollY !== window.scrollY ) {

        this.background.style.transform = `translate3d(0, ${ window.scrollY * 0.12 }px, 0)`;
        this.lastScrollY = window.scrollY;

      }

    });

  }

  /**
   * simulate typing
   *
   * @param { string|array } text     string to be added to state text
   * @param { function }     callback function to call after typing characters
   */

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

  /**
   * backspace over inner text
   *
   * @param { number }   count    number of characters to delete
   * @param { function } callback function to call after deleting characters
   */

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

  /**
   * add word to end of inner text
   */

  addWord() {

    let index = this.word ? this.props.words.indexOf( this.word ) + 1 : 0;
    if ( index > this.props.words.length - 1 ) index = 0;
    this.word = this.props.words[index];
    this.type( ` ${ this.word }`, this.removeWord.bind( this ) );

  }

  /**
   * remove word from end of inner text
   */

  removeWord() {

    setTimeout( () => {

      this.backspace( this.word.length + 1, this.addWord.bind( this ) );

    }, 3000 );

  }

  /**
   * generate component markup
   *
   * @return { element } react element
   */

  render() {

    const classes = ClassNames({
      'banner':          true,
      'banner--resting': this.state.isResting,
    });

    return (

      <div className={ classes }>
        <div className="banner-background">
          <img
            alt="Banner background"
            src={ this.props.image }
            ref={ background => this.background = background }
          />
        </div>

        <div className="banner-overlay" />
        <p className="banner-text">{ this.state.text }</p>
      </div>

    );

  }

}

Banner.propTypes = {
  image: PropTypes.node.isRequired,
  text:  PropTypes.string,
  words: PropTypes.arrayOf( PropTypes.string ),
};

export default Banner;
