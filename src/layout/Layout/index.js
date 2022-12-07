import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = () => {
  return (
    
    <Box sx={{ display: "flex" }}>
   
      <Sidebar />
      <Topbar/>
      <div style={{ width: "100%", paddingTop: "80px" }}>
        <Outlet>
        </Outlet>
      </div>
    </Box>
  );
};

export default Layout;
