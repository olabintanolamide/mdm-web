import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = () => {
  return (
    <Box>
      <Sidebar />
      <Topbar />
      <div>
        <Outlet />
      </div>
    </Box>
  );
};

export default Layout;
