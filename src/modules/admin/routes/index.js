import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../../layout/Layout";
import DashboardLayout from "../views";
import Dashboard from "../views/Dashboard";

const AdminRoutes = () => (
  <Routes>
    <Route path="/">
      <Route path="dashboard" element={<Layout />}>
        <Route path="" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<>doest not exist</>} />
    </Route>
  </Routes>
);

export default AdminRoutes;
