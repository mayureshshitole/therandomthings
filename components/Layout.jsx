import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 font-body pb-10">{children}</div>
    </>
  );
};

export default Layout;
