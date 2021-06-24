import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { isEqual, omit } from 'lodash';
import { breakpoints } from './breakpoints';

var makeMediaQuery = function makeMediaQuery(breakpoint) {
  return function (styles) {
    return !styles || Object.keys(styles).length === 0 ? {} : _defineProperty({}, "screen and (min-width: ".concat(breakpoints[breakpoint], "px)"), styles);
  };
};

var mediaQuery = {
  tablet: makeMediaQuery('tablet'),
  desktop: makeMediaQuery('desktop')
};
export var responsiveStyle = function responsiveStyle(_ref2) {
  var mobile = _ref2.mobile,
      tablet = _ref2.tablet,
      desktop = _ref2.desktop;
  var mobileStyles = omit(mobile, '@media');
  var tabletStyles = !tablet || isEqual(tablet, mobileStyles) ? null : tablet;
  var stylesBelowDesktop = tabletStyles || mobileStyles;
  var desktopStyles = !desktop || isEqual(desktop, stylesBelowDesktop) ? null : desktop;
  var hasMediaQueries = tabletStyles || desktopStyles;
  return _objectSpread(_objectSpread({}, mobileStyles), hasMediaQueries ? {
    '@media': _objectSpread(_objectSpread({}, tabletStyles ? mediaQuery.tablet(tabletStyles) : {}), desktopStyles ? mediaQuery.desktop(desktopStyles) : {})
  } : {});
};