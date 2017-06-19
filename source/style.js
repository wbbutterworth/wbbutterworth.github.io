const variables = {

  // layout

  'wrapper-width': '1024px',
  'column-count':  '12',

  // palette

  'background-color': 'white',
  'foreground-color': 'black',
  'highlight-color':  'red',

  // baseline

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

  /**
   * calculate font size given a pixel reference
   *
   * @param { string } targetPx expected font size in pixels
   *
   * @returns { string } target pixel height in root em
   */

  'font-size': function( targetPx ) {

    const base    = parseInt( variables['base-font-size'], 10 );
    const target  = parseInt( targetPx, 10 );
    const measure = target / base;

    return `${ measure }rem`;

  },

  /**
   * calculate line height given a pixel reference
   *
   * @param { string } targetPx expected font size in pixels
   *
   * @returns { string } target pixel height in em without unit
   */

  'line-height': function( targetPx ) {

    const base       = parseInt( variables['base-font-size'], 10 );
    const target     = parseInt( targetPx, 10 );
    const height     = variables['base-line-height'];
    const multiplier = Math.ceil( target / base );

    return ( height * multiplier ) * base / target;

  },

  /**
   * calculate height in lines using the base font size
   *
   * @param { number } count number of expected lines
   * @param { string } subtractPx pixels to subtract from height
   *
   * @returns { string } height in pixels equivelant to a number of lines; each line is equivelant to the base font size
   */

  'lines': function( count, subtractPx ) {

    const base     = parseInt( variables['base-font-size'], 10 );
    const height   = variables['base-line-height'];
    const subtract = subtractPx ? parseInt( subtractPx, 10 ) / base : 0;
    const measure  = count * ( base * height ) / base - subtract;

    return `${ measure }rem`;

  },

  /**
   * calculate percentage, pixel or em width based on column count
   *
   * @param { number } count number of columns to span
   * @param { string } unit which unit to use; px, rem, %
   *
   * @returns { string } calculated width in specified unit
   */

  'span': function( count, unit ) {

    const base    = parseInt( variables['base-font-size'], 10 );
    const context = parseInt( variables['wrapper-width'], 10 );
    const columns = parseInt( variables['column-count'], 10 );

    let measure;

    switch ( unit ) {

      case 'px':
        measure = `${ context / columns * count }px`;
        break;

      case 'rem':
        measure = `${ context / columns * count / base }rem`;
        break;

      default:
      case '%':
        measure = `${ 100 / columns * count }%`;
        break;

    }

    return measure;

  },

};

module.exports = {
  variables,
  functions,
};
