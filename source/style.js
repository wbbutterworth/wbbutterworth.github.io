const variables = {
	'wrapper-width':    '1024px',
	'site-width':       '1024px',
	'column-count':     '12',
	'background-color': '#fcfcfc',
	'foreground-color': '#030303',
	'highlight-color':  '#941b0c',
	'border-color':     '#d6d6d6',
	'base-line-height': '1.5',
	'base-font-size':   '16px',
	'small-font-size':  '14px',
	'h6-font-size':     '18px',
	'h5-font-size':     '20px',
	'h4-font-size':     '22px',
	'h3-font-size':     '24px',
	'h2-font-size':     '26px',
	'h1-font-size':     '28px',
};

const functions = {
	fontsize(targetPx) {
		const baseFontSize   = parseInt(variables['base-font-size'], 10);
		const targetFontSize = parseInt(targetPx, 10);

		return `${targetFontSize / baseFontSize}rem`;
	},

	lineheight(targetPx) {
		const baseFontSize   = parseInt(variables['base-font-size'], 10);
		const baseLineHeight = variables['base-line-height'];
		const targetFontSize = parseInt(targetPx, 10);
		const lineMultiplier = Math.ceil(targetFontSize / baseFontSize);

		return ((baseLineHeight * lineMultiplier) * baseFontSize) / targetFontSize;
	},

	lines(count, subtractPx) {
		const baseFontSize     = parseInt(variables['base-font-size'], 10);
		const baseLineHeight   = variables['base-line-height'];
		const pixelsToSubtract = subtractPx ? (parseInt(subtractPx, 10) / baseFontSize) : 0;

		return `${(count * ((baseFontSize * baseLineHeight) / baseFontSize)) - pixelsToSubtract}rem`;
	},

	span(spanCount, unit) {
		const baseFontSize = parseInt(variables['base-font-size'], 10);
		const columnCount  = parseInt(variables['column-count'], 10);
		const siteWidth    = parseInt(variables['wrapper-width'], 10);

		let measurement;

		switch (unit) {
		case 'px':
			measurement = `${(siteWidth / columnCount) * spanCount}px`;
			break;

		case 'rem':
			measurement = `${((siteWidth / columnCount) * spanCount) / baseFontSize}rem`;
			break;

		default:
		case '%':
			measurement = `${(100 / columnCount) * spanCount}%`;
			break;
		}

		return measurement;
	},
};

module.exports = { variables, functions };
