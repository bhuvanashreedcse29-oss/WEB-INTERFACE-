import React from "react";
import { Menu } from "lucide-react";
export default function Navbar({ title, onToggleSidebar }) {
  return (
    <header className="topbar">
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle menu">
          <Menu size={19} />
        </button>
        <span className="topbar-title">{title}</span>
      </div>
      <div className="topbar-right">
        <div className="admin-meta" style={{ textAlign: "right" }}>
          <div className="name">Admin User</div>
          <div className="role">Faculty Coordinator</div>
        </div>
        <div className="avatar">AD</div>
      </div>
    </header>
  );
}
