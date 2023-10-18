import { Outlet } from "react-router-dom";
import NavAdmin from "./NavAdmin";
import React, { useState } from "react";

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-gray-200">
      <NavAdmin isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow w-full max-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
