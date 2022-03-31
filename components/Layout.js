import Header from "./Header";
import Footer from "./Footer";
import Header2 from "./Header2";
function Layout({ children }) {
  return (
    <div className="container mx-auto max-w-3xl flex flex-col min-h-screen px-4 selection:bg-violet-300 selection:text-black">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
