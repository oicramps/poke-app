import React from 'react';
import { Preflight, ThemeProvider } from '@xstyled/styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Main from './containers/Main';
import { GlobalStyle, theme } from './styles';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  console.log('theme', theme);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Preflight />
        <GlobalStyle />
        <Main />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
