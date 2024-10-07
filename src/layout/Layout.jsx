import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Layout.css";
import "./Globals.css";
import { Navbar, Footer } from "../components";

const Layout = ({ children, disablePaddingBottom = false }) => {
  return (
    <HelmetProvider>
      <Helmet>{/* Add any sitewide scripts here */}</Helmet>
      <Navbar />
      <main
        className={`main ${
          disablePaddingBottom === true ? disablePaddingBottom : ""
        }`}
      >
        {children}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Layout;
