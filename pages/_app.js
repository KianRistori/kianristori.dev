import Layout from "../components/Layout";
import "../styles/globals.css";
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </html>
  );
}

export default MyApp;
