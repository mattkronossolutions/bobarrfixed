// eslint-disable-next-line import/named
import { DefaultTheme } from 'styled-components';

export const breakpoints = {
  mobile: 576,
  tablet: 992,
} as const;

export const media = {
  mobile: `(max-width: ${breakpoints.mobile - 1}px)`,
  tablet: `(min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet - 1}px)`,
  desktop: `(min-width: ${breakpoints.tablet}px)`,
  touchDevice: `(hover: none) and (pointer: coarse)`,
} as const;

export const theme: DefaultTheme = {
  navbarHeight: 64,
  tmdbCardHeight: 450,
  breakpoints,
  media,

  colors: {
    navbarBackground: '#2A363B',
    coral: '#ff847c',
    blue: '#1890ff',
  },
};
