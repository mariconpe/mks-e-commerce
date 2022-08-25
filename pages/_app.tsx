import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#fff',
    secondary: '#0F52BA',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
