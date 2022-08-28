import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 font-body pb-10">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
