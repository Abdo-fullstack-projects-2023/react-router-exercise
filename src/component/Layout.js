import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <Fragment>
      <div className="layout-container">
        <Navbar />

        <main className="content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;