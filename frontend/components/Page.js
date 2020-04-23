import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  haystackYellow: "#FFC000",
  haystackTeal: "#00CEAF",
  backgroundGrey: "#5A5E76",
  midGrey: "#554F66",
  darkGrey: "#464055",
  borderGrey: "#736C85",
  green: "#32CE25",
  red: "#FF0000",
  black: "#393939",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: ${props => props.theme.backgroundGrey};
  color: white;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css?family=Montserrat')
  format('woff2');
  font-weight: normal;
  font-style: normal;
}
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Montserrat';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

/**
 * Set the page layout to be used across all pages
 * Use the theme provider to pass in theme to be accessible across the app, no need for prop drilling
 */
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <GlobalStyle />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
