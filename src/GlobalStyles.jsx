import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: red;
    --color-secondary: blue;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  #root {
    height: 100%;
    isolation: isolate;
  }

  body {
    font-family: var(--font-family), sans-serif;
    font-weight: var(--font-weight-normal, 400);
    line-height: 1.5;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyles;
