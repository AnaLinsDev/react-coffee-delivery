import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.baseText};
    font-family: ${({ theme }) => theme.fonts.roboto.family};
    font-size: ${({ theme }) => theme.fonts.roboto.text.s};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
