import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const TestThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
);

export default TestThemeProvider;
