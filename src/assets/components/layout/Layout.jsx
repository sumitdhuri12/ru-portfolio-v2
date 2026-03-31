import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

const Layout = () => {
  const location = useLocation();

  const hideIcon = location.pathname.startsWith("/Project");

  return (
    <>
      <Navbar hideIcon={hideIcon} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
