import Layout from "../components/Layout";
import "../styles/globals.css";
import { ThemeProvider } from 'next-themes'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
    <Head>
      <title>Kian Ristori</title>
      <meta name="description" content="I'm Full Stack Web Developer based in Italy. Welcome to my blog"/>
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
