const variables = {
  'wrapper-width': '1024px',
  'site-width': '1024px',
  'column-count': '12',
  'background-color': '#fcfcfc',
  'foreground-color': '#030303',
  'highlight-color': '#941b0c',
  'border-color': '#d6d6d6',
  'base-line-height': '1.5',
  'base-font-size': '16px',
  'small-font-size': '14px',
  'h6-font-size': '18px',
  'h5-font-size': '20px',
  'h4-font-size': '22px',
  'h3-font-size': '24px',
  'h2-font-size': '26px',
  'h1-font-size': '28px',
};

const functions = {
  fontsize(targetPx) {
    const base = parseInt(variables['base-font-size'], 10);
    const target = parseInt(targetPx, 10);

    return `${target / base}rem`;
  },

  lineheight(targetPx) {
    const base = parseInt(variables['base-font-size'], 10);
    const target = parseInt(targetPx, 10);
    const height = variables['base-line-height'];
    const multiplier = Math.ceil(target / base);

    // const size = target / base;
    // return (size / height) * (height / size);
    // return (target / base) * height;
    return ((height * multiplier) * base) / target;
  },

  lines(count, subtractPx) {
    const base = parseInt(variables['base-font-size'], 10);
    const height = variables['base-line-height'];
    const subtract = subtractPx ? (parseInt(subtractPx, 10) / base) : 0;
    const measure = (count * ((base * height) / base)) - subtract;

    return `${measure}rem`;
  },

  span(count, unit) {
    const base = parseInt(variables['base-font-size'], 10);
    const context = parseInt(variables['wrapper-width'], 10);
    const columns = parseInt(variables['column-count'], 10);

    let measure;

    switch (unit) {
      case 'px':
        measure = `${(context / columns) * count}px`;
        break;

      case 'rem':
        measure = `${((context / columns) * count) / base}rem`;
        break;

      default:
      case '%':
        measure = `${(100 / columns) * count}%`;
        break;
    }

    return measure;
  },
};

module.exports = { variables, functions };
