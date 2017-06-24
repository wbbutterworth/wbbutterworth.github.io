import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

const Column = (props) => {
  const classes = ClassNames({
    column: true,
    [`column--span-${props.span}`]: props.span,
    [`column--at-1-span-${props.atOneSpan}`]: props.atOneSpan,
    [`column--at-1-span-${props.atTwoSpan}`]: props.atTwoSpan,
    [`column--at-1-span-${props.atThreeSpan}`]: props.atThreeSpan,
    [`column--at-1-span-${props.atFourSpan}`]: props.atFourSpan,
    [`column--at-1-span-${props.atFiveSpan}`]: props.atFiveSpan,
    [`column--at-1-span-${props.atSixSpan}`]: props.atSixSpan,
    [`column--at-1-span-${props.atSevenSpan}`]: props.atSevenSpan,
    [`column--at-1-span-${props.atEightSpan}`]: props.atEightSpan,
    [`column--at-1-span-${props.atNineSpan}`]: props.atNineSpan,
    [`column--at-1-span-${props.atTenSpan}`]: props.atTenSpan,
    [`column--at-1-span-${props.atElevenSpan}`]: props.atElevenSpan,
    [`column--at-1-span-${props.atTwelveSpan}`]: props.atTwelveSpan,
  });

  return (
    <div className={classes}>{props.children}</div>
  );
};

Column.defaultProps = {
  span: false,
  atOneSpan: false,
  atTwoSpan: false,
  atThreeSpan: false,
  atFourSpan: false,
  atFiveSpan: false,
  atSixSpan: false,
  atSevenSpan: false,
  atEightSpan: false,
  atNineSpan: false,
  atTenSpan: false,
  atElevenSpan: false,
  atTwelveSpan: false,
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  span: PropTypes.string,
  atOneSpan: PropTypes.string,
  atTwoSpan: PropTypes.string,
  atThreeSpan: PropTypes.string,
  atFourSpan: PropTypes.string,
  atFiveSpan: PropTypes.string,
  atSixSpan: PropTypes.string,
  atSevenSpan: PropTypes.string,
  atEightSpan: PropTypes.string,
  atNineSpan: PropTypes.string,
  atTenSpan: PropTypes.string,
  atElevenSpan: PropTypes.string,
  atTwelveSpan: PropTypes.string,
};

export default Column;
