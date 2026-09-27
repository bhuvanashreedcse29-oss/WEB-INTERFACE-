import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Printer, Download, CheckCircle2, XCircle, Award, Percent, BookOpen, GraduationCap } from "lucide-react";
import students from "../data/students.js";
import { getStudentSummary, getInitials } from "../utils/calculations.js";
import MarksTable from "../components/MarksTable.jsx";
import AttendanceCard from "../components/AttendanceCard.jsx";
import PerformanceChart from "../components/PerformanceChart.jsx";
const DEFAULT_REMARK =
  "Consistent effort throughout the semester with a solid grasp of core concepts. Keep up the steady progress.";
export default function ReportCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find((s) => String(s.id) === id);
  const remarkKey = `remarks-${id}`;
  const [remark, setRemark] = useState(() => localStorage.getItem(remarkKey) || DEFAULT_REMARK);
  useEffect(() => {
    localStorage.setItem(remarkKey, remark);
  }, [remark, remarkKey]);
  const summary = useMemo(() => (student ? getStudentSummary(student) : null), [student]);
  if (!student || !summary) {
    return (
      <div className="empty-state">
        <p>No report card found for this student.</p>
        <Link className="btn btn-ghost btn-sm" to="/students">
          Back to Students
        </Link>
      </div>
    );
  }
  const { subjectResults, totalMarks, maxMarks, percentage, cgpa, overallGrade, status, attendance } = summary;
  const chartData = subjectResults.map((s) => ({ name: s.code, total: s.total }));
  function handlePrint() {
    window.print();
  }
  return (
    <div className="report-shell">
      <div className="report-actions no-print" style={{ marginBottom: 18, marginTop: 0 }}>
        <button className="btn btn-ghost btn-sm" onClick={() => navigate(-1)}>
          <ArrowLeft size={15} /> Back to Students
        </button>
        <button className="btn btn-ghost btn-sm" onClick={handlePrint}>
          <Printer size={15} /> Print Report
        </button>
        <button className="btn btn-primary btn-sm" onClick={handlePrint}>
          <Download size={15} /> Download PDF
        </button>
      </div>
      <div className="section-card" id="printable-report">
        <div className="report-head">
          <span className="badge-year">Academic Year {student.academicYear}</span>
          <h1>STUDENT REPORT CARD</h1>
        </div>
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
              <span>Date of Birth</span>
              {student.dob}
            </div>
            <div>
              <span>Email</span>
              {student.email}
            </div>
            <div>
              <span>Phone</span>
              {student.phone}
            </div>
            <div>
              <span>Academic Year</span>
              {student.academicYear}
            </div>
          </div>
        </div>
        <h2 style={{ marginBottom: 4 }}>Marks Summary</h2>
        <p className="section-sub">Internal (30) + External (70) — totals and grades are calculated automatically</p>
        <MarksTable subjectResults={subjectResults} />

        <div className="result-grid">
          <div className="result-card" style={{ background: "linear-gradient(135deg,#2c4bd6,#3b6cf6)" }}>
            <div className="label">
              <BookOpen size={14} style={{ verticalAlign: "-2px", marginRight: 4 }} />
              Total Marks
            </div>
            <div className="value">
              {totalMarks} / {maxMarks}
            </div>
          </div>
          <div className="result-card" style={{ background: "linear-gradient(135deg,#0f9b8e,#2dd4bf)" }}>
            <div className="label">
              <Percent size={14} style={{ verticalAlign: "-2px", marginRight: 4 }} />
              Percentage
            </div>
            <div className="value">{percentage}%</div>
          </div>
          <div className="result-card" style={{ background: "linear-gradient(135deg,#c9720c,#f5a524)" }}>
            <div className="label">
              <GraduationCap size={14} style={{ verticalAlign: "-2px", marginRight: 4 }} />
              CGPA
            </div>
            <div className="value">{cgpa}</div>
          </div>
          <div className="result-card" style={{ background: "linear-gradient(135deg,#5b3fc9,#a78bfa)" }}>
            <div className="label">
              <Award size={14} style={{ verticalAlign: "-2px", marginRight: 4 }} />
              Overall Grade
            </div>
            <div className="value">{overallGrade}</div>
          </div>
        </div>
        <div className={`status-banner ${status === "Pass" ? "status-pass" : "status-fail"}`}>
          {status === "Pass" ? <CheckCircle2 size={22} /> : <XCircle size={22} />}
          {status === "Pass" ? "PASSED" : "FAILED"}
        </div>
        <h2 style={{ marginBottom: 4 }}>Attendance</h2>
        <p className="section-sub">Overall and subject-wise attendance for the semester</p>
        <AttendanceCard overall={attendance} subjects={student.subjects} />
        <h2 style={{ marginTop: 28, marginBottom: 4 }}>Subject-wise Performance</h2>
        <p className="section-sub">Total marks scored per subject</p>
        <PerformanceChart data={chartData} height={260} />
        <h2 style={{ marginTop: 28, marginBottom: 10 }}>Faculty Remarks</h2>
        <div className="remarks-box">
          <textarea value={remark} onChange={(e) => setRemark(e.target.value)} />
        </div>
      </div>
    </div>
  );
}
