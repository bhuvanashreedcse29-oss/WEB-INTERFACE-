import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import students from "../data/students.js";
import { getStudentSummary } from "../utils/calculations.js";
import StudentCard from "../components/StudentCard.jsx";
export default function Students() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("all");
  const [semester, setSemester] = useState("all");
  const [grade, setGrade] = useState("all");
  const [status, setStatus] = useState("all");
  const departments = useMemo(() => [...new Set(students.map((s) => s.department))], []);
  const semesters = useMemo(() => [...new Set(students.map((s) => s.semester))].sort(), []);
  const filtered = useMemo(() => {
    return students.filter((s) => {
      const sum = getStudentSummary(s);
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.registerNumber.toLowerCase().includes(q) ||
        s.department.toLowerCase().includes(q);
      const matchesDept = department === "all" || s.department === department;
      const matchesSem = semester === "all" || String(s.semester) === semester;
      const matchesGrade = grade === "all" || sum.overallGrade === grade;
      const matchesStatus = status === "all" || sum.status === status;
      return matchesQuery && matchesDept && matchesSem && matchesGrade && matchesStatus;
    });
  }, [query, department, semester, grade, status]);
  return (
    <>
      <div className="page-header">
        <h1>Students</h1>
        <p>Search, filter and review every student's academic record</p>
      </div>
      <div className="toolbar">
        <div className="search-box">
          <Search size={16} color="#6b7390" />
          <input
            placeholder="Search by name, register number or department"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select className="filter-select" value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="all">All Departments</option>
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select className="filter-select" value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option value="all">All Semesters</option>
          {semesters.map((s) => (
            <option key={s} value={s}>
              Semester {s}
            </option>
          ))}
        </select>
        <select className="filter-select" value={grade} onChange={(e) => setGrade(e.target.value)}>
          <option value="all">All Grades</option>
          {["O", "A+", "A", "B+", "B", "C", "F"].map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <select className="filter-select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">Pass &amp; Fail</option>
          <option value="Pass">Pass</option>
          <option value="Fail">Fail</option>
        </select>
      </div>
      {filtered.length === 0 ? (
        <div className="empty-state">No students match your search or filters.</div>
      ) : (
        <div className="student-grid">
          {filtered.map((s, i) => (
            <StudentCard key={s.id} student={s} delay={i * 40} />
          ))}
        </div>
      )}
    </>
  );
}
