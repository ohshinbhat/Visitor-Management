import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const hostDetails = { name: "Mithali", position: "Senior Software Engineer" };
const SidebarContentH = () => {
  const Navigate = useNavigate();
  return (
    <div className="sidebar">
      <nav className="">
        <div className="logo">
          VISITOR
          <br />
          MANAGER
        </div>
      </nav>
    </div>
  );
};

const HostLayout = () => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className="root-layout">
      <SidebarContentH />
      <Outlet />
    </div>
  );
};

export default HostLayout;
