import { createGlobalStyle } from '@xstyled/styled-components';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    margin: 50px auto;
    max-width: 750px;
  }

  input,
  button {
    font-family: 'Montserrat', sans-serif;
  }
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
