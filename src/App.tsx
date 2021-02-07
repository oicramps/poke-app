import { Preflight, ThemeProvider } from '@xstyled/styled-components';
import React from 'react';
import { GlobalStyle, theme } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <div>{`App Running ${process.env.REACT_APP_API_URL}`}</div>
    </ThemeProvider>
  );
};

export default App;
