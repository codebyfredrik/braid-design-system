import { style, mapToStyles } from '@mattsjones/css-core';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

export const rootSize = mapToStyles(
  themeVars.typography.text,
  ({ mobile, tablet }) =>
    responsiveStyle({
      mobile: {
        height: mobile.capHeight,
      },
      tablet: {
        height: tablet.capHeight,
      },
    }),
);

const bounce = style({
  '@keyframes': {
    '33%': {
      transform: `translateY(-.5em)`,
    },
    '66%': {
      transform: 'translateY(0)',
    },
  },

  animationFillMode: 'both',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out',
  animationDuration: '0.6s',
});

const animationDelay = 0.07;
export const circle = [
  bounce,
  style({
    selectors: {
      [`&:nth-child(1)`]: {
        animationDelay: `${animationDelay * 2}s`,
      },
      [`&:nth-child(2)`]: {
        animationDelay: `${animationDelay}s`,
      },
      [`&:nth-child(3)`]: {
        animationDelay: '0s',
      },
    },
  }),
];

export const animationDelayValue = 0.8;
export const delay = style({
  opacity: 0,
  '@keyframes': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

  animationIterationCount: '1',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDuration: '0.25s',
  animationDelay: `${animationDelayValue}s`,
});

export const circleSize = mapToStyles(
  themeVars.typography.text,
  ({ mobile, tablet }) =>
    responsiveStyle({
      mobile: {
        width: mobile.capHeightFloored,
        height: mobile.capHeightFloored,
      },
      tablet: {
        width: tablet.capHeightFloored,
        height: tablet.capHeightFloored,
      },
    }),
);