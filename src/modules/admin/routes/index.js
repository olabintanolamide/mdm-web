import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../../layout/Layout";
import DashboardLayout from "../views";
import Dashboard from "../views/Dashboard";
import Directory from "../../admin/views/Dashboard/Directory";



const AdminRoutes = () => (
  <Routes>
    <Route path="/">
      <Route path="dashboard" element={<Layout />}>
        <Route path="" element={<Dashboard />} />
         <Route path="directory" element={<Directory />}></Route>
        
      </Route>
      <Route path="*" element={<>doest not exist</>} />
    </Route>
  </Routes>
);

export default AdminRoutes;
