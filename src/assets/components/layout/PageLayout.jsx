import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import Loader from "../global/Loader";
import { useEffect, useState } from "react";
import gsap from "gsap";

const PageLayout = () => {
  const location = useLocation();

  const hideIcon = location.pathname.startsWith("/project");

  useEffect(() => {
    gsap.fromTo("main", { opacity: 0 }, { opacity: 1, duration: 0.6 });
  }, [location.pathname]);

  return (
    <>
      <Navbar hideIcon={hideIcon} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Loader />
    </>
  );
};

export default PageLayout;
