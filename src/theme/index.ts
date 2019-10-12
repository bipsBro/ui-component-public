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
  orange: "#EFFC90"
};

const theme = {
  colors
};

export default theme;

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
