import { useState } from "react";
import { MenuContext } from "./MenuContext";

export const MenuProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(true);
  const [currentTab, setCurrentTab] = useState("dashboard");

  return (
    <MenuContext.Provider
      value={{ openMenu, setOpenMenu, currentTab, setCurrentTab }}
    >
      {children}
    </MenuContext.Provider>
  );
};
