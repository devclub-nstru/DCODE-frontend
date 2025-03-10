import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import App from "./components/Background/App";
  

function Layout() {
  return (
    <>
      <Header />
      <App/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
