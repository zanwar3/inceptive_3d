import React from "react";
import { Outlet } from "react-router-dom";
import { Header, CustSnackbars } from "@/components";
import Loader from "@/components/Loader";

const DefaultLayout = () => {
  return (
    <div
      style={{
        backgroundColor: "#1F1E1E",
      }}
    >
      <Header />
      <Loader />
      <CustSnackbars />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
