import React from "react";
import { useSelector } from "react-redux";

import Wrapper from "../../assets/wrappers/Sidebar";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>LOGO</header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
