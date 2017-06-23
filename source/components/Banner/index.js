import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

require('./style.css');

/**
 * animated top level banner
 *
 * @extends React.Component
 */

class Banner extends React.Component {

  /**
   * setup component
   *
   * @param { object } props             component properties
   * @param { string } props.image       path to image source
   * @param { string } props.staticText  static banner text
   * @param { array }  props.dynamicText array of text to animate at the end of text
   */

  constructor(props) {
    super(props);

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
    setInterval(this.animate.bind(this), 50);
    this.type(this.props.staticText, this.addDynamicText.bind(this));
  }

  /**
   * handle parallax scroll
   */

  animate() {
    window.requestAnimationFrame(() => {
      if (this.lastScrollY !== window.scrollY) {
        this.background.style.transform = `translate3d(0, ${ window.scrollY * 0.2 }px, 0)`;
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

  type(text, callback) {
    this.setState({ isResting: false });

    const textArray = Array.isArray(text) ? text : text.split('');
    const letter    = textArray.shift();

    setTimeout(() => {
      this.setState({ text: `${ this.state.text + letter }` });

      if (textArray.length > 0) {
        this.type(textArray, callback);
      } else if (callback) {
        this.setState({ isResting: true });
        callback();
      }
    }, Math.floor(Math.random() * 50) + 100);
  }

  /**
   * backspace over inner text
   *
   * @param { number }   count    number of characters to delete
   * @param { function } callback function to call after deleting characters
   */

  backspace(count, callback) {
    this.setState({ isResting: false });

    setTimeout(() => {
      this.setState({ text: this.state.text.substr(0, this.state.text.length - 1) });

      if (count > 1) {
        this.backspace(count - 1, callback);
      } else if (callback) {
        this.setState({ isResting: true });
        callback();
      }
    }, 50);
  }

  /**
   * add dynamic text to end of inner text
   */

  addDynamicText() {
    let index = this.dynamicText ? this.props.dynamicText.indexOf(this.dynamicText) + 1 : 0;
    if (index > this.props.dynamicText.length - 1) index = 0;
    this.dynamicText = this.props.dynamicText[index];
    this.type(` ${ this.dynamicText }`, this.removeDynamicText.bind(this));
  }

  /**
   * remove dynamic text from end of inner text
   */

  removeDynamicText() {
    setTimeout(() => {
      this.backspace(this.dynamicText.length + 1, this.addDynamicText.bind(this));
    }, 3000);
  }

  /**
   * generate component markup
   *
   * @return { element } react element
   */

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
            ref={ background => this.background = background }
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

Banner.propTypes = {
  image:       PropTypes.node.isRequired,
  staticText:  PropTypes.string,
  dynamicText: PropTypes.arrayOf( PropTypes.string ),
};

export default Banner;
