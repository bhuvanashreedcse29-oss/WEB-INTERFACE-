import React from "react";
import { NavLink } from "react-router-dom";
import { GraduationCap, Home, Users, BarChart3, FileText, Info } from "lucide-react";
const links = [
  { to: "/", label: "Dashboard", icon: Home, end: true },
  { to: "/students", label: "Students", icon: Users },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/report-card/1", label: "Reports", icon: FileText },
  { to: "/about", label: "About", icon: Info },
];
export default function Sidebar({ open, onNavigate }) {
  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-brand">
          <div className="logo-dot">
            <GraduationCap size={18} color="#fff" />
          </div>
          <span>
            Report Card
            <br />
            Management
          </span>
        </div>
        <nav className="sidebar-nav">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onNavigate}
              className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
            >
              <Icon size={17} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-foot">Academic Year 2025–2026</div>
      </aside>
    </>
  );
}
