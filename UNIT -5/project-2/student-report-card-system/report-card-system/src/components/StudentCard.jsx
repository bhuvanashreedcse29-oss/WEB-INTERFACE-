import React from "react";
import { useNavigate } from "react-router-dom";
import { getStudentSummary, getInitials } from "../utils/calculations.js";
export default function StudentCard({ student, delay = 0 }) {
  const navigate = useNavigate();
  const { percentage, cgpa, attendance, overallGrade, status } = getStudentSummary(student);
  return (
    <div className="student-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="student-card-top">
        <div className="avatar" style={{ width: 46, height: 46, fontSize: "0.9rem" }}>
          {getInitials(student.name)}
        </div>
        <div className="info">
          <div className="name">{student.name}</div>
          <div className="reg">{student.registerNumber}</div>
        </div>
      </div>
      <div className="student-card-meta">
        <span>{student.department}</span>
        <span>Sem {student.semester}</span>
      </div>
      <div className="student-card-stats">
        <div className="stat">
          <b>{cgpa}</b>
          <span>CGPA</span>
        </div>
        <div className="stat">
          <b>{percentage}%</b>
          <span>Score</span>
        </div>
        <div className="stat">
          <b>{attendance}%</b>
          <span>Attend.</span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span className={`badge ${status === "Pass" ? "badge-pass" : "badge-fail"}`}>
          {status === "Pass" ? `✓ Pass · ${overallGrade}` : `✕ Fail · ${overallGrade}`}
        </span>
        <button className="btn btn-primary btn-sm" onClick={() => navigate(`/report-card/${student.id}`)}>
          View Report
        </button>
      </div>
    </div>
  );
}
