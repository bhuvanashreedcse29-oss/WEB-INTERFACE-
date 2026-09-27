import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
const TITLES = {
  "/": "Dashboard",
  "/students": "Students",
  "/analytics": "Performance Analytics",
  "/about": "About",
};
export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const title =
    TITLES[pathname] ??
    (pathname.startsWith("/report-card")
      ? "Report Card"
      : pathname.startsWith("/students/")
      ? "Student Details"
      : "Report Card Management System");
  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
      <div
        className={`sidebar-backdrop ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      <div className="app-main">
        <Navbar title={title} onToggleSidebar={() => setSidebarOpen((v) => !v)} />
        <div className="app-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}