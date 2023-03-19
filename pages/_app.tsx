import ApiProvider from '@/api/provider/api-provider';
import Header from '@/components/layout/header/header';
import GlobalStyle from '@/styles/global.style';
import themeA from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider>
      <ThemeProvider theme={themeA}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApiProvider>
  );
}

export default App;
