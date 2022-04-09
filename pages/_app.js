import Layout from "../components/Layout";
import "../styles/globals.css";
import { ThemeProvider } from 'next-themes'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </html>
  );
}

export default MyApp;
