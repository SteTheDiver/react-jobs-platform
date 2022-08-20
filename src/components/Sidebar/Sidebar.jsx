import React from "react";
import { useSelector } from "react-redux";

import Wrapper from "../../assets/wrappers/Sidebar";
import Logo from "../Logo";
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
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
