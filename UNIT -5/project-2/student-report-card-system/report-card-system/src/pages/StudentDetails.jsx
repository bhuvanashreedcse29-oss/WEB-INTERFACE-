import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import students from "../data/students.js";
import { getStudentSummary, getInitials } from "../utils/calculations.js";
export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find((s) => String(s.id) === id);
  if (!student) {
    return (
      <div className="empty-state">
        <p>No student found for this ID.</p>
        <Link className="btn btn-ghost btn-sm" to="/students">
          Back to Students
        </Link>
      </div>
    );
  }
  const { percentage, cgpa, attendance, overallGrade, status } = getStudentSummary(student);
  return (
    <>
      <button className="btn btn-ghost btn-sm no-print" style={{ marginBottom: 18 }} onClick={() => navigate(-1)}>
        <ArrowLeft size={15} /> Back
      </button>
      <div className="section-card">
        <div className="student-info-grid">
          <div className="student-photo">{getInitials(student.name)}</div>
          <div className="info-fields">
            <div>
              <span>Name</span>
              {student.name}
            </div>
            <div>
              <span>Register Number</span>
              {student.registerNumber}
            </div>
            <div>
              <span>Department</span>
              {student.department}
            </div>
            <div>
              <span>Semester</span>
              {student.semester}
            </div>
            <div>
              <span>Email</span>
              {student.email}
            </div>
            <div>
              <span>Phone</span>
              {student.phone}
            </div>
          </div>
        </div>
        <div className="student-card-stats" style={{ gridTemplateColumns: "repeat(4, 1fr)", maxWidth: 480 }}>
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
          <div className="stat">
            <b>{overallGrade}</b>
            <span>{status}</span>
          </div>
        </div>
        <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => navigate(`/report-card/${student.id}`)}>
          <FileText size={15} /> View Full Report
        </button>
      </div>
    </>
  );
}
