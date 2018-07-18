/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 187);
/******/ })
/************************************************************************/
/******/ ({

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(412);

var Icon = function Icon(props) {
	return _react2.default.createElement('i', { className: 'icon', dangerouslySetInnerHTML: { __html: props.svg } });
};

Icon.propTypes = {
	svg: _propTypes2.default.string.isRequired
};

exports.default = Icon;

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\"><title>file</title><path d=\"M68,0H12a2,2,0,0,0-2,2V78a2,2,0,0,0,2,2H68a2,2,0,0,0,2-2V2A2,2,0,0,0,68,0ZM50,62H20V58H50ZM60,47H20V43H60Zm0-15H20V28H60Zm0-15H20V13H60Z\"></path></svg>"

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\"><title>github</title><path d=\"M40-.31a40,40,0,0,0-12.65,78c2,.37,2.73-.87,2.73-1.93s0-4.11-.05-7.45c-11.13,2.42-13.48-4.72-13.48-4.72-1.82-4.63-4.44-5.86-4.44-5.86-3.63-2.48.27-2.43.27-2.43,4,.28,6.13,4.12,6.13,4.12,3.57,6.12,9.36,4.35,11.65,3.33a8.52,8.52,0,0,1,2.54-5.35c-8.89-1-18.23-4.44-18.23-19.78a15.49,15.49,0,0,1,4.12-10.74c-.42-1-1.79-5.08.39-10.59,0,0,3.36-1.07,11,4.1a37.95,37.95,0,0,1,20,0c7.64-5.18,11-4.1,11-4.1,2.18,5.51.81,9.58.39,10.59a15.46,15.46,0,0,1,4.12,10.74c0,15.37-9.36,18.75-18.27,19.74C48.68,58.6,50,61,50,64.77c0,5.35,0,9.66,0,11,0,1.07.72,2.31,2.75,1.92A40,40,0,0,0,40-.31Z\" style=\"fill-rule:evenodd\"></path><path d=\"M15.12,57.14c-.09.2-.4.26-.69.12s-.45-.4-.36-.6.4-.26.69-.12.46.4.36.6Zm-.49-.36\"></path><path d=\"M16.74,59c-.19.18-.56.09-.82-.19a.61.61,0,0,1-.12-.83c.2-.18.56-.09.82.19s.31.65.11.83Zm-.38-.41\"></path><path d=\"M18.32,61.25c-.25.17-.65,0-.89-.34s-.25-.78,0-1,.64,0,.89.34.24.79,0,1Zm0,0\"></path><path d=\"M20.48,63.48c-.22.24-.69.18-1-.15a.77.77,0,0,1-.23-1c.22-.24.69-.17,1,.15s.45.78.22,1Zm0,0\"></path><path d=\"M23.46,64.77c-.1.31-.55.46-1,.32s-.75-.5-.66-.82.55-.46,1-.32.75.5.65.82Zm0,0\"></path><path d=\"M26.74,65c0,.33-.37.6-.85.61S25,65.37,25,65s.38-.6.85-.61.87.26.87.58Zm0,0\"></path><path d=\"M29.79,64.5c.06.32-.27.65-.75.74s-.89-.11-1-.43.28-.66.74-.75.9.11,1,.44Zm0,0\"></path></svg>"

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\"><title>twitter</title><path d=\"M25,72.35c30.25,0,46.79-25.06,46.79-46.79,0-.71,0-1.42,0-2.13A33.46,33.46,0,0,0,80,14.91a32.83,32.83,0,0,1-9.45,2.59,16.5,16.5,0,0,0,7.23-9.1,33,33,0,0,1-10.44,4,16.46,16.46,0,0,0-28,15A46.69,46.69,0,0,1,5.37,10.21a16.46,16.46,0,0,0,5.09,22A16.32,16.32,0,0,1,3,30.11v.21A16.45,16.45,0,0,0,16.19,46.44a16.42,16.42,0,0,1-7.43.28A16.46,16.46,0,0,0,24.13,58.14,33,33,0,0,1,3.71,65.2,33.48,33.48,0,0,1-.21,65,46.56,46.56,0,0,0,25,72.33\"></path></svg>"

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\"><title>icons</title><path d=\"M80,48.67V78.11H62.93V50.64c0-6.9-2.47-11.61-8.65-11.61a9.33,9.33,0,0,0-8.76,6.24A11.7,11.7,0,0,0,45,49.43V78.11H27.87s.23-46.53,0-51.35H45V34l-.11.16H45V34c2.27-3.5,6.32-8.49,15.39-8.49C71.58,25.55,80,32.89,80,48.67ZM10,2C4.17,2,.35,5.83.35,10.87s3.71,8.88,9.43,8.88H9.9c5.95,0,9.66-3.95,9.66-8.88S15.85,2,10,2ZM1.36,78.11H18.43V26.76H1.36Z\"></path></svg>"

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/react-dom/index.js'");

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/classnames/index.js'");

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\"><title>envelope</title><polygon points=\"76.43 10 3.57 10 40 37.49 76.43 10\"></polygon><path d=\"M40,42.51,0,12.32V68a2,2,0,0,0,2,2H78a2,2,0,0,0,2-2V12.32Z\"></path></svg>"

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(188);
module.exports = __webpack_require__(305);


/***/ }),

/***/ 188:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/babel-polyfill/lib/index.js'");

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(148);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = __webpack_require__(405);

var _routes2 = _interopRequireDefault(_routes);

var _App = __webpack_require__(484);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _App2.default,
  null,
  _react2.default.createElement(_routes2.default, null)
), document.getElementById('root'));

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(406);

var _Home2 = _interopRequireDefault(_Home);

var _NotFound = __webpack_require__(458);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _reactRouterDom = __webpack_require__(459);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
	return _react2.default.createElement(
		_reactRouterDom.BrowserRouter,
		null,
		_react2.default.createElement(
			_reactRouterDom.Switch,
			null,
			_react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home2.default }),
			_react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
		)
	);
};

exports.default = Routes;

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Wrapper = __webpack_require__(407);

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Header = __webpack_require__(410);

var _Header2 = _interopRequireDefault(_Header);

var _Map = __webpack_require__(414);

var _Map2 = _interopRequireDefault(_Map);

var _Section = __webpack_require__(438);

var _Section2 = _interopRequireDefault(_Section);

var _Footer = __webpack_require__(440);

var _Footer2 = _interopRequireDefault(_Footer);

var _Banner = __webpack_require__(442);

var _Banner2 = _interopRequireDefault(_Banner);

var _Project = __webpack_require__(444);

var _Project2 = _interopRequireDefault(_Project);

var _micStand = __webpack_require__(457);

var _micStand2 = _interopRequireDefault(_micStand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = {
	static: "Hi, I'm Liam and I",

	dynamic: ['make things.', 'create websites.', 'play loud music.', 'drink way too much coffee.']
};

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_Header2.default, null),
		_react2.default.createElement(_Banner2.default, { image: _micStand2.default, staticText: text.static, dynamicText: text.dynamic }),
		_react2.default.createElement(
			'main',
			null,
			_react2.default.createElement(
				_Wrapper2.default,
				null,
				_react2.default.createElement(
					_Section2.default,
					null,
					_react2.default.createElement(
						'header',
						null,
						_react2.default.createElement(
							'h1',
							{ id: 'about' },
							'About'
						)
					),
					_react2.default.createElement(
						'p',
						null,
						'Hi, my name is Liam. Well, actually it\u2019s William, but no one but paychecks and angry relatives call me that anymore. I\u2019m a twenty-something year old web developer from Tuscaloosa, AL. I enjoy loud music, creative problem solving, and unhealthy amounts of chips and salsa.'
					),
					_react2.default.createElement(
						'p',
						null,
						'I became a web developer in 2008 when I was fortunate enough to land a student-worker position at the University of Alabama. I\u2019ve been using my accumulated web development skills to avoid starvation ever since. Over the course of my career I\u2019ve developed an expertise in Front-End Development using whatever tools the industry professionals are drooling over at the time. I enjoy what I do and the people I work with. So, if you have a project in mind feel free to ',
						_react2.default.createElement(
							'a',
							{ href: 'mailto:wbbutterworth@gmail.com' },
							'shoot me an email'
						),
						' or if you\u2019re looking for someone full-time ',
						_react2.default.createElement(
							'a',
							{ href: '/liambutterworth.pdf' },
							'check out my resume'
						)
					),
					_react2.default.createElement(
						'p',
						null,
						'If you\u2019re interested in viewing examples of my work here\u2019s my ',
						_react2.default.createElement(
							'a',
							{ href: 'https://github.com/wbbutterworth' },
							'GitHub account'
						),
						'. I work with all the usual suspects and acronyms; responsive design, cross-browser compatibility, RESTful APIs, HTML, CSS, etc.'
					)
				),
				_react2.default.createElement(
					_Section2.default,
					null,
					_react2.default.createElement(
						'header',
						null,
						_react2.default.createElement(
							'h1',
							{ id: 'work' },
							'Work'
						)
					),
					_react2.default.createElement(
						_Project2.default,
						{ icon: 'npm', title: 'Bassline', link: 'http://github.com/wbbutterworth/postcss-bassline.git', tags: 'JavaScript,PostCSS,Node Module,Mocha' },
						'I wrote this plugin to make managing vertical rhythm on a website much simpler by abstracting the math needed for the font-size and line-height properties. With it you can pass a pixel value reference to the font-size() function and it will spit back the correct rem value relative to the base font size.'
					)
				)
			)
		),
		_react2.default.createElement(_Footer2.default, null)
	);
};

exports.default = Home;

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(409);

var Wrapper = function Wrapper(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'wrapper' },
		props.children
	);
};

Wrapper.propTypes = {
	children: _propTypes2.default.node.isRequired
};

exports.default = Wrapper;

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/liam/Development/liambutterworth.github.io/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(174);

var _classnames2 = _interopRequireDefault(_classnames);

var _smoothScroll = __webpack_require__(411);

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

var _Icon = __webpack_require__(106);

var _Icon2 = _interopRequireDefault(_Icon);

var _file = __webpack_require__(107);

var _file2 = _interopRequireDefault(_file);

var _envelope = __webpack_require__(175);

var _envelope2 = _interopRequireDefault(_envelope);

var _github = __webpack_require__(108);

var _github2 = _interopRequireDefault(_github);

var _twitter = __webpack_require__(109);

var _twitter2 = _interopRequireDefault(_twitter);

var _linkedin = __webpack_require__(110);

var _linkedin2 = _interopRequireDefault(_linkedin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(413);

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.toggleScrolled = _this.toggleScrolled.bind(_this);
		_this.toggleOpen = _this.toggleOpen.bind(_this);
		_this.open = _this.open.bind(_this);
		_this.close = _this.close.bind(_this);

		_this.state = {
			isScrolled: false,
			isOpen: false
		};
		return _this;
	}

	_createClass(Header, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			setInterval(this.toggleScrolled, 200);
			this.smoothScroll = new _smoothScroll2.default('.header a');

			this.smoothScroll.init({
				speed: 800,
				offset: 88, // computed section header height in pixels
				easing: 'easeInOutCubic'
			});
		}
	}, {
		key: 'toggleScrolled',
		value: function toggleScrolled() {
			this.setState({ isScrolled: window.scrollY > 0 });
		}
	}, {
		key: 'toggleOpen',
		value: function toggleOpen() {
			this.setState({ isOpen: !this.state.isOpen });
		}
	}, {
		key: 'open',
		value: function open() {
			if (!this.state.isOpen) this.setState({ isOpen: true });
		}
	}, {
		key: 'close',
		value: function close() {
			if (this.state.isOpen) this.setState({ isOpen: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var classes = (0, _classnames2.default)({
				header: true,
				'header--open': this.state.isOpen,
				'header--scrolled': this.state.isScrolled
			});

			return _react2.default.createElement(
				'header',
				{ className: classes },
				_react2.default.createElement(
					'div',
					{ className: 'header-interface' },
					_react2.default.createElement(
						'a',
						{ href: '#top', className: 'header-logo', onClick: this.close },
						'Liam',
						_react2.default.createElement(
							'span',
							null,
							'Butterworth'
						)
					),
					_react2.default.createElement(
						'button',
						{ className: 'header-button', onClick: this.toggleOpen, 'aria-label': 'Toggle navigation' },
						_react2.default.createElement('span', null),
						_react2.default.createElement('span', null),
						_react2.default.createElement('span', null)
					)
				),
				_react2.default.createElement(
					'nav',
					{ className: 'header-links' },
					_react2.default.createElement(
						'ul',
						{ className: 'header-sections' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#about', onClick: this.close },
								'About'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#work', onClick: this.close },
								'Work'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#contact', onClick: this.close },
								'Contact'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'ul',
								{ className: 'header-social' },
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: 'mailto:wbbutterworth@gmail.com' },
										_react2.default.createElement(_Icon2.default, { svg: _envelope2.default })
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '/liambutterworth.pdf', target: '_blank', rel: 'noopener noreferrer' },
										_react2.default.createElement(_Icon2.default, { svg: _file2.default })
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: 'https://github.com/wbbutterworth', target: '_blank', rel: 'noopener noreferrer' },
										_react2.default.createElement(_Icon2.default, { svg: _github2.default })
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: 'https://linkedin.com/in/wbbutterworth', target: '_blank', rel: 'noopener noreferrer' },
										_react2.default.createElement(_Icon2.default, { svg: _linkedin2.default })
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/smooth-scroll/dist/js/smooth-scroll.min.js'");

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/liam/Development/liambutterworth.github.io/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/liam/Development/liambutterworth.github.io/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _googleMapReact = __webpack_require__(415);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _Marker = __webpack_require__(433);

var _Marker2 = _interopRequireDefault(_Marker);

var _theme = __webpack_require__(435);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(437);

var Map = function Map(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'map' },
		_react2.default.createElement(
			_googleMapReact2.default,
			{
				bootstrapURLKeys: { key: 'AIzaSyD3Z_Y71blkA9MlIrR_4Fl0wkTN5C2CyEg' },
				defaultCenter: props.center,
				defaultZoom: props.zoom,
				options: { styles: _theme2.default }
			},
			_react2.default.createElement(_Marker2.default, props.marker)
		)
	);
};

Map.defaultProps = {
	zoom: 11
};

Map.propTypes = {
	zoom: _propTypes2.default.number,

	center: _propTypes2.default.shape({
		lat: _propTypes2.default.number.isRequired,
		lng: _propTypes2.default.number.isRequired
	}).isRequired,

	marker: _propTypes2.default.shape({
		lat: _propTypes2.default.number.isRequired,
		lng: _propTypes2.default.number.isRequired
	}).isRequired
};

exports.default = Map;

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/google-map-react/lib/index.js'");

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(434);

var Marker = function Marker(props) {
	return _react2.default.createElement(
		'a',
		{
			className: 'map-marker',
			href: 'http://maps.google.com?q=' + props.lat + ',' + props.lng,
			target: '_blank'
		},
		'My Location'
	);
};

Marker.propTypes = {
	lat: _propTypes2.default.number.isRequired,
	lng: _propTypes2.default.number.isRequired
};

exports.default = Marker;

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/liam/Development/liambutterworth.github.io/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(436);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = [{
	featureType: 'all',
	elementType: 'labels.text.fill',

	stylers: [{ saturation: 36 }, { color: _style2.default['background-color'] }, { lightness: 40 }]
}, {
	featureType: 'all',
	elementType: 'labels.text.stroke',

	stylers: [{ visibility: 'on' }, { color: _style2.default['foreground-color'] }, { lightness: 20 }]
}, {
	featureType: 'all',
	elementType: 'labels.icon',

	stylers: [{ visibility: 'off' }]
}, {
	featureType: 'administrative',
	elementType: 'geometry.fill',

	stylers: [{ color: _style2.default['foreground-color'] }, { lightness: 10 }]
}, {
	featureType: 'administrative',
	elementType: 'geometry.stroke',

	stylers: [{ color: _style2.default['foreground-color'] }, { lightness: 10 }, { weight: 1.2 }]
}, {
	featureType: 'landscape',
	elementType: 'geometry',

	stylers: [{ color: _style2.default['foreground-color'] }, { lightness: 7 }]
}, {
	featureType: 'poi',
	elementType: 'geometry',

	stylers: [{ color: _style2.default['foreground-color'] }, { lightness: 12 }]
}, {
	featureType: 'road.highway',
	elementType: 'geometry.fill',

	stylers: [{ color: _style2.default['foreground-color'] }, { lightness: 20 }]
}, {
	featureType: 'road.highway',
	elementType: 'geometry.stroke',

	stylers: [{ color: _style2.default['foreground-color'] }, { lightness: 26 }, { weight: 0.4 }]
}, {
	featureType: 'road.arterial',
	elementType: 'geometry',

	stylers: [{ color: _style2.default['foreground-color'] }, { lightness: 24 }]
}, {
	featureType: 'road.local',
	elementType: 'geometry',

	stylers: [{ color: _style2.default['foreground-color'] }, { lightness: 22 }]
}, {
	featureType: 'transit',
	elementType: 'geometry',

	stylers: [{ color: _style2.default['foreground-color'] }, { lightness: 20 }]
}, {
	featureType: 'water',
	elementType: 'geometry',

	stylers: [{ color: _style2.default['foreground-color'] }, { lightness: 12 }]
}];

exports.default = theme;

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	'wrapper-width': '1024px',
	'site-width': '1024px',
	'column-count': '12',
	'background-color': '#fcfcfc',
	'foreground-color': '#030303',
	'highlight-color': '#941b0c',
	'border-color': '#d6d6d6',
	'base-line-height': '1.25',
	'base-font-size': '16px',
	'small-font-size': '14px',
	'h6-font-size': '18px',
	'h5-font-size': '20px',
	'h4-font-size': '22px',
	'h3-font-size': '24px',
	'h2-font-size': '26px',
	'h1-font-size': '48px'
};

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/liam/Development/liambutterworth.github.io/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(439);

var Section = function Section(props) {
	return _react2.default.createElement(
		'section',
		{ className: 'section' },
		props.children
	);
};

Section.propTypes = {
	children: _propTypes2.default.node.isRequired
};

exports.default = Section;

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/liam/Development/liambutterworth.github.io/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(106);

var _Icon2 = _interopRequireDefault(_Icon);

var _file = __webpack_require__(107);

var _file2 = _interopRequireDefault(_file);

var _github = __webpack_require__(108);

var _github2 = _interopRequireDefault(_github);

var _twitter = __webpack_require__(109);

var _twitter2 = _interopRequireDefault(_twitter);

var _linkedin = __webpack_require__(110);

var _linkedin2 = _interopRequireDefault(_linkedin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(441);

var Footer = function Footer() {
	return _react2.default.createElement(
		'footer',
		{ id: 'contact', className: 'footer' },
		_react2.default.createElement(
			'div',
			{ className: 'footer-inner' },
			_react2.default.createElement(
				'h1',
				{ className: 'footer-text' },
				'Say hello,',
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'a',
					{ href: 'mailto:wbbutterworth@gmail.com' },
					'wbbutterworth@gmail.com'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'footer-links' },
				_react2.default.createElement(
					'a',
					{ href: '/liambutterworth.pdf', target: '_blank', rel: 'noopener noreferrer' },
					_react2.default.createElement(_Icon2.default, { svg: _file2.default })
				),
				_react2.default.createElement(
					'a',
					{ href: 'https://github.com/wbbutterworth', target: '_blank', rel: 'noopener noreferrer' },
					_react2.default.createElement(_Icon2.default, { svg: _github2.default })
				),
				_react2.default.createElement(
					'a',
					{ href: 'https://linkedin.com/in/wbbutterworth', target: '_blank', rel: 'noopener noreferrer' },
					_react2.default.createElement(_Icon2.default, { svg: _linkedin2.default })
				)
			)
		)
	);
};

exports.default = Footer;

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/liam/Development/liambutterworth.github.io/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(174);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(443);

var Banner = function (_React$Component) {
	_inherits(Banner, _React$Component);

	function Banner(props) {
		_classCallCheck(this, Banner);

		var _this = _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).call(this, props));

		_this.animate = _this.animate.bind(_this);
		_this.addDynamicText = _this.addDynamicText.bind(_this);
		_this.removeDynamicText = _this.removeDynamicText.bind(_this);
		_this.mediaQuery = window.matchMedia('( min-width: 900px )');

		_this.state = {
			text: '',
			isResting: true
		};
		return _this;
	}

	_createClass(Banner, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.animate();
			setInterval(this.animate, 50);
			this.type(this.props.staticText, this.addDynamicText);
		}
	}, {
		key: 'animate',
		value: function animate() {
			var _this2 = this;

			if (this.mediaQuery.matches) {
				window.requestAnimationFrame(function () {
					if (_this2.lastScrollY !== window.scrollY) {
						_this2.background.style.transform = 'translate3d(0, ' + window.scrollY * 0.25 + 'px, 0)';
						_this2.lastScrollY = window.scrollY;
					}
				});
			}
		}
	}, {
		key: 'type',
		value: function type(text, callback) {
			var _this3 = this;

			this.setState({ isResting: false });

			var textArray = Array.isArray(text) ? text : text.split('');
			var letter = textArray.shift();

			setTimeout(function () {
				_this3.setState({ text: '' + (_this3.state.text + letter) });

				if (textArray.length > 0) {
					_this3.type(textArray, callback);
				} else if (callback) {
					_this3.setState({ isResting: true });
					callback();
				}
			}, Math.floor(Math.random() * 50) + 100);
		}
	}, {
		key: 'backspace',
		value: function backspace(count, callback) {
			var _this4 = this;

			this.setState({ isResting: false });

			setTimeout(function () {
				_this4.setState({ text: _this4.state.text.substr(0, _this4.state.text.length - 1) });

				if (count > 1) {
					_this4.backspace(count - 1, callback);
				} else if (callback) {
					_this4.setState({ isResting: true });
					callback();
				}
			}, 50);
		}
	}, {
		key: 'addDynamicText',
		value: function addDynamicText() {
			var index = this.dynamicText ? this.props.dynamicText.indexOf(this.dynamicText) + 1 : 0;
			if (index > this.props.dynamicText.length - 1) index = 0;
			this.dynamicText = this.props.dynamicText[index];
			this.type(' ' + this.dynamicText, this.removeDynamicText);
		}
	}, {
		key: 'removeDynamicText',
		value: function removeDynamicText() {
			var _this5 = this;

			setTimeout(function () {
				_this5.backspace(_this5.dynamicText.length + 1, _this5.addDynamicText);
			}, 3000);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this6 = this;

			var classes = (0, _classnames2.default)({
				banner: true,
				'banner--resting': this.state.isResting
			});

			return _react2.default.createElement(
				'div',
				{ className: classes },
				_react2.default.createElement('div', { className: 'banner-overlay' }),
				_react2.default.createElement(
					'div',
					{ className: 'banner-background' },
					_react2.default.createElement('img', {
						alt: 'Banner background',
						src: this.props.image,
						ref: function ref(background) {
							return _this6.background = background;
						}
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'banner-text' },
					_react2.default.createElement(
						'h1',
						null,
						'Front-End\xA0',
						_react2.default.createElement(
							'span',
							{ className: 'banner-text-role' },
							'Developer'
						),
						_react2.default.createElement(
							'span',
							{ className: 'banner-text-role-abbr' },
							'Dev'
						)
					),
					_react2.default.createElement('hr', null),
					_react2.default.createElement(
						'p',
						null,
						this.state.text
					)
				)
			);
		}
	}]);

	return Banner;
}(_react2.default.Component);

Banner.defaultProps = {
	staticText: '',
	dynamicText: []
};

Banner.propTypes = {
	image: _propTypes2.default.node.isRequired,
	staticText: _propTypes2.default.string,
	dynamicText: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

exports.default = Banner;

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/liam/Development/liambutterworth.github.io/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = __webpack_require__(106);

var _Icon2 = _interopRequireDefault(_Icon);

var _shortid = __webpack_require__(445);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(454);

var Project = function Project(props) {
	var icon = __webpack_require__(455)("./" + props.icon + '.svg');
	var tags = props.tags.split(',');

	return _react2.default.createElement(
		'div',
		{ className: 'project' },
		_react2.default.createElement(
			'div',
			{ className: 'project-aside' },
			_react2.default.createElement(
				'a',
				{ href: props.link, target: '_blank', rel: 'noopener' },
				_react2.default.createElement(_Icon2.default, { svg: icon })
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'project-content' },
			_react2.default.createElement(
				'a',
				{ href: props.link, target: '_blank', rel: 'noopener' },
				props.title
			),
			_react2.default.createElement(
				'p',
				null,
				props.children
			),
			_react2.default.createElement(
				'ul',
				{ className: 'project-tags' },
				tags.map(function (tag) {
					return _react2.default.createElement(
						'li',
						{ key: _shortid2.default.generate() },
						tag
					);
				})
			)
		)
	);
};

Project.propTypes = {
	link: _propTypes2.default.string.isRequired,
	title: _propTypes2.default.string.isRequired,
	children: _propTypes2.default.node.isRequired
};

exports.default = Project;

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/shortid/index.js'");

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/liam/Development/liambutterworth.github.io/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./envelope.svg": 175,
	"./file.svg": 107,
	"./github.svg": 108,
	"./linkedin.svg": 110,
	"./npm.svg": 456,
	"./twitter.svg": 109
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 455;

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\"><title>NPM</title><path d=\"M0,79.07H256V164.4H128v14.23H71.11V164.4H0Zm14.22,71.11H42.67V107.51H56.89v42.67H71.11V93.29H14.22ZM85.33,93.29V164.4h28.45V150.18h28.44V93.29Zm28.45,14.22H128V136H113.78Zm42.66-14.22v56.89h28.45V107.51h14.22v42.67h14.22V107.51h14.23v42.67h14.22V93.29Z\" style=\"fill:#030303;stroke:#030303;stroke-miterlimit:10\"></path><polygon points=\"14.22 150.18 42.67 150.18 42.67 107.51 56.89 107.51 56.89 150.18 71.11 150.18 71.11 93.29 14.22 93.29 14.22 150.18\" style=\"fill:#fff\"></polygon><path d=\"M85.33,93.29V164.4h28.45V150.18h28.44V93.29ZM128,136H113.78V107.51H128Z\" style=\"fill:#fff\"></path><polygon points=\"156.44 93.29 156.44 150.18 184.89 150.18 184.89 107.51 199.11 107.51 199.11 150.18 213.33 150.18 213.33 107.51 227.56 107.51 227.56 150.18 241.78 150.18 241.78 93.29 156.44 93.29\" style=\"fill:#fff\"></polygon></svg>"

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/mic-stand.96e02f6fcfa9675e83e993cbf0038380.jpg";

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'404 - Not Found'
		),
		_react2.default.createElement(
			'p',
			null,
			'Sorry, but the page you are looking for does not exist. TEST'
		)
	);
};

exports.default = NotFound;

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/react-router-dom/es/index.js'");

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(485);

var App = function App(props) {
	return _react2.default.createElement(
		'div',
		{ id: 'app' },
		props.children
	);
};

App.propTypes = {
	children: _propTypes2.default.node.isRequired
};

exports.default = App;

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/Users/liam/Development/liambutterworth.github.io/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /Users/liam/Development/liambutterworth.github.io/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/react/react.js'");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/liam/Development/liambutterworth.github.io/node_modules/prop-types/index.js'");

/***/ })

/******/ });