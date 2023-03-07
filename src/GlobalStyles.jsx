import { createGlobalStyle } from "styled-components/macro";

import "@fontsource/space-grotesk/variable.css";

export const BREAKPOINTS = {
  tablet: `(min-width: ${768 / 16}rem)`,
  desktop: `(min-width: ${1440 / 16}rem)`,
};

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: hsl(257 67% 51% / 1);
    --color-primary-light: hsl(257 100% 64% / 1);
    --color-secondary: hsl(347 97% 70% / 1);
    --color-tertiary: hsl(41 100% 70% / 1);

    --color-black: hsl(0 0% 0% / 1);
    --color-white: hsl(0 0% 100% / 1);
    --color-text: hsl(0 0% 0% / 0.66);

    --font-family: "Space GroteskVariable";
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --border: 3px solid;
    --drop-shadow-black: 0 10px 0 var(--color-black);
    --drop-shadow-primary: 0 10px 0 var(--color-primary);
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
    line-height: calc(21 / 16);
    background: var(--color-primary);
    color: var(--color-text);
    height: 100%;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyles;
