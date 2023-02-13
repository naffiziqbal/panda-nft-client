import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";

const Main = () => {
  return (
    <div className="text-white bg-gradient-to-r from-slate-700 to-slate-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
