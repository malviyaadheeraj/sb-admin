"use client";

import React from "react";
import Header from "@/components/header/Header";
import { MenuProvider } from "@/context/MenuProvider";

const Providers = ({ children }) => {
  return (
    <MenuProvider>
      <Header />
      {children}
    </MenuProvider>
  );
};

export default Providers;
