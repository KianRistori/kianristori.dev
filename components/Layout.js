import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div className="container mx-auto max-w-3xl flex flex-col min-h-screen px-4 selection:bg-violet-300 selection:text-black">
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.1/dist/flowbite.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap" rel="stylesheet" />
    </Head>
      <Navbar />
        <main className="flex-1">{children}</main>
      <Footer />
      <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
    </div>
  );
}

export default Layout;
