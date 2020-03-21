import Head from 'next/head';
import { Global, css } from '@emotion/core';
import 'normalize.css';
import { Header } from '../components/header';

const globalStyle = css`
  body {
    font-family: 'Lato', sans-serif;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Global styles={globalStyle} />
      <Head>
        <title>No Bathroom Breaks</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans|Lato&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />

      <Component {...pageProps} />
    </React.Fragment>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
