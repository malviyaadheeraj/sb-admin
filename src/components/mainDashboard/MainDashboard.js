"use client";

import React, { useContext } from "react";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";
import Footer from "../footer/Footer";
import Charts from "./dashboard/Charts";
import Tables from "./dashboard/Tables";
import { MenuContext } from "@/context/MenuContext";

const MainDashboard = () => {
  const { openMenu, currentTab } = useContext(MenuContext);

  return (
    <div id="layoutSidenav">
      {openMenu ? (
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
      ) : null}
      <div
        id="layoutSidenav_content"
        className={!openMenu ? "activeMenu" : null}
      >
        {currentTab === "dashboard" && <Dashboard />}
        {currentTab === "charts" && <Charts />}
        {currentTab === "tables" && <Tables />}

        <Footer />
      </div>
    </div>
  );
};

export default MainDashboard;
