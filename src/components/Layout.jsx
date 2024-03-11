import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen p-4 md:p-12 bg-gradient-to-b from-rose-400 via-pink-400 to-sky-400">
      <div className="relative max-w-screen-xl mx-auto bg-white rounded">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
