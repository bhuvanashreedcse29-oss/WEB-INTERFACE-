import React from "react";
import { useNavigate } from "react-router-dom";
import { getStudentSummary, getInitials } from "../utils/calculations.js";
export default function StudentTable({ students }) {
  const navigate = useNavigate();
  if (students.length === 0) {
    return <div className="empty-state">No students match your search or filters.</div>;
  }
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Register No.</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Percentage</th>
            <th>Grade</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => {
            const { percentage, overallGrade, status } = getStudentSummary(s);
            return (
              <tr key={s.id} style={{ animationDelay: `${i * 40}ms` }}>
                <td data-label="Name">
                  <div className="name-cell">
                    <div className="avatar" style={{ width: 30, height: 30, fontSize: "0.7rem" }}>
                      {getInitials(s.name)}
                    </div>
                    {s.name}
                  </div>
                </td>
                <td data-label="Register No.">{s.registerNumber}</td>
                <td data-label="Department">{s.department}</td>
                <td data-label="Semester">{s.semester}</td>
                <td data-label="Percentage">{percentage}%</td>
                <td data-label="Grade">
                  <span className="grade-chip">{overallGrade}</span>
                </td>
                <td data-label="Status">
                  <span className={`badge ${status === "Pass" ? "badge-pass" : "badge-fail"}`}>
                    {status === "Pass" ? "✓ Pass" : "✕ Fail"}
                  </span>
                </td>
                <td data-label="">
                  <button className="btn btn-ghost btn-sm" onClick={() => navigate(`/report-card/${s.id}`)}>
                    View Report
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
