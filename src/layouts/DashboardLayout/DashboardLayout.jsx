import React from "react";

import { Sidebar } from "../../components/Sidebar/Sidebar";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar />
      <div className="flex-fill p-4 bg-secondary-subtle">{children}</div>
    </div>
  );
};
