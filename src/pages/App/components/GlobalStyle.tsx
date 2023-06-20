import { css, Global } from '@emotion/react';

export default function GlobalStyle() {
  return <Global styles={globalCss} />;
}

const globalCss = css`
  body,
  html,
  #__next {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    max-width: 820px;
    margin: 0 auto;
    font-family: 'Pretendard', sans-serif;
  }

  a {
    text-decoration: none;
  }

  main {
    display: block;
  }

  legend {
    display: table;
    float: left;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  legend + * {
    clear: both;
  }

  fieldset {
    border: 0;
    padding: 0.01em 0 0 0;
    margin: 0;
    min-width: 0;
  }

  body:not(:-moz-handler-blocked) fieldset {
    display: table-cell;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
    line-height: normal;
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;
