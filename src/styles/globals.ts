import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors["base-text"]};
    font-family: ${({ theme }) => theme.fonts.families.roboto.family} !important;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
