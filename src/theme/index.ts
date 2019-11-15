import baseStyled, { ThemedStyledInterface } from "styled-components";

const colors = {
  black: "#2E2E2E",
  gray: "#6C6C6C",
  lightGray: "#B4B4B4",
  red: "#F62F5E",
  white: "#FFFFFF",
  lightWhite: "#F7F7F7",
  blue: "#6EB2FB",
  yellow: "#F1AD3D",
  green: "#00D3CA",
  orange: "#EFFC90",
  // blue: '#2E5BFF',
  lightblue: 'rgba(46,92,255,0.2)',
  // green: '#33AC2E',
  // red: '#D63649',
  // yellow: '#F7C137',
  teal: '#00C1D4',
  purple: '#8C54FF',
  // black: '#2E384D',
  black2: '#69707F',
  black3: '#8798AD',
  // white: '#FFFFFF',
  // gray: '#BFC5D2',
  gray2: '#F4F6FC',
  gray3: '#EEF3F5',
  caption: '#B0BAC9',
  input: 'rgba(224, 231, 255, 0.20)',
  border: '#D6DDF6',
  card: 'rgba(46,91,255,0.08)',
  shadow: 'rgba(46,91,255,0.07)'
};

const theme = {
  colors
};

export default theme;

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
