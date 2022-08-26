import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { queryClient } from '../lib/queryClient';
import GlobalStyle from '../styles/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#0F52BA',
    secondary: '#FFFFFF',
    black: '#000000',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          rel="preload"
          href="public/fonts/Montserrat-variable-font-weight.ttf"
          as="font"
          crossOrigin="anonymous"
          type="font/ttf"
        />

        <link
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
