import React from "react";
import { Search, BarChart3, Printer, ShieldCheck, Gauge, Layers } from "lucide-react";
const features = [
  { icon: Search, title: "Search & Filters", desc: "Find any student instantly by name, register number, department, semester or grade." },
  { icon: BarChart3, title: "Live Analytics", desc: "Class-wide averages, grade distribution and subject performance, computed on the fly." },
  { icon: Printer, title: "Printable Reports", desc: "Clean, print-ready report cards with a single click — no clutter, just the record." },
  { icon: Gauge, title: "Automatic Grading", desc: "Totals, CGPA, percentage and pass/fail status are all derived — never hard-coded." },
  { icon: Layers, title: "Reusable Components", desc: "Built from small, composable pieces — cards, tables, charts — for easy maintenance." },
  { icon: ShieldCheck, title: "No Backend Needed", desc: "Runs entirely in the browser with sample data, so it's easy to demo or extend." },
];
const tech = ["React 18", "Vite", "React Router DOM", "Recharts", "Lucide Icons", "CSS3"];
export default function About() {
  return (
    <>
      <div className="about-hero">
        <h1>Student Report Card Management System</h1>
        <p>
          A single, organized place to view and analyze student academic performance —
          marks, attendance, grades and progress, all in one dashboard.
        </p>
      </div>
      <div className="section-card">
        <h2>Features</h2>
        <p className="section-sub">What the system can do out of the box</p>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div className="feature-card" key={title} style={{ animationDelay: `${i * 60}ms` }}>
              <div className="icon-wrap">
                <Icon size={18} />
              </div>
              <h3 style={{ fontSize: "0.98rem", marginBottom: 6 }}>{title}</h3>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-muted)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-card">
        <h2>Technologies Used</h2>
        <p className="section-sub">Front-end only — no backend or database required</p>
        <div className="tech-pill-row">
          {tech.map((t) => (
            <span className="tech-pill" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="section-card">
        <h2>Academic Benefits</h2>
        <p className="section-sub">Why a system like this helps</p>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
          Centralizing grades, attendance and remarks reduces the time faculty spend compiling
          records by hand, cuts down on transcription errors, and gives students a clear,
          consistent view of their own progress every semester.
        </p>
      </div>
      <div className="section-card">
        <h2>Developer</h2>
        <p className="section-sub">Built as a demonstration project</p>
        <div className="student-card-top" style={{ marginBottom: 0 }}>
          <div className="avatar" style={{ width: 46, height: 46 }}>
            DV
          </div>
          <div className="info">
            <div className="name">Dev Team</div>
            <div className="reg">React · Vite · Front-end engineering</div>
          </div>
        </div>
      </div>
    </>
  );
}
