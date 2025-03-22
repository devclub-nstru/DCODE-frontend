import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import axiosInstance from "./utils/axiosConfig";
import { BalanceProvider } from "./context/BalanceContext";

function Layout() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BalanceProvider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      <Header />
      <Outlet />
      <Footer />
    </BalanceProvider>
  );
}

export default Layout;
