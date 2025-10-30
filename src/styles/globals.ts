import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.baseText};
    font-family: ${({ theme }) => theme.fonts.roboto.family};
    font-size: ${({ theme }) => theme.fonts.roboto.text.s};
    -webkit-font-smoothing: antialiased;

    margin: 2rem 10rem;
    height: 2.5rem;

    @media (max-width: 768px) {
      margin: 2rem 1.5rem;
    }

    @media (max-width: 480px) {
      margin: 1rem 1rem; 
    }
  }

  button {
    cursor: pointer;
  }
`;
