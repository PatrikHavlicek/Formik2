import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.8rem;
  }

  html,
  body {
    font-size: 62.5%;
    font-family: 'poppins'
  }

  a {
    text-decoration: none;
  }

  button {
    
    padding: 0 0.5rem;
    min-width: 2.5rem;
  }

  ul {
    list-style: none;
  }
`;
