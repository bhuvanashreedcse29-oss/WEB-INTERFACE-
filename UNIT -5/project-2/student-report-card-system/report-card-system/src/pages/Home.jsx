import React, { useMemo } from "react";
import { Users, Percent, CheckCircle2, CalendarCheck } from "lucide-react";
import students from "../data/students.js";
import { getStudentSummary } from "../utils/calculations.js";
import StatCard from "../components/StatCard.jsx";
import StudentTable from "../components/StudentTable.jsx";
import PerformanceChart from "../components/PerformanceChart.jsx";
export default function Home() {
  const summaries = useMemo(() => students.map((s) => ({ s, sum: getStudentSummary(s) })), []);
  const stats = useMemo(() => {
    const total = summaries.length;
    const avgPct = summaries.reduce((a, { sum }) => a + sum.percentage, 0) / total;
    const passed = summaries.filter(({ sum }) => sum.status === "Pass").length;
    const avgAttendance = summaries.reduce((a, { sum }) => a + sum.attendance, 0) / total;
    return { total, avgPct, passed, avgAttendance };
  }, [summaries]);
  const gradeDistribution = useMemo(() => {
    const counts = {};
    summaries.forEach(({ sum }) => {
      counts[sum.overallGrade] = (counts[sum.overallGrade] || 0) + 1;
    });
    return ["O", "A+", "A", "B+", "B", "C", "F"]
      .filter((g) => counts[g])
      .map((g) => ({ name: g, total: counts[g] }));
  }, [summaries]);
  return (
    <>
      <div className="page-header">
        <h1>Student Report Card Management System</h1>
        <p>Track academic performance, attendance and student progress</p>
      </div>
      <div className="stat-grid">
        <StatCard icon={Users} label="Total Students" value={stats.total} gradient="blue" desc="Enrolled this year" />
        <StatCard
          icon={Percent}
          label="Average Percentage"
          value={stats.avgPct}
          suffix="%"
          decimals={1}
          gradient="teal"
          desc="Across all subjects"
          delay={80}
        />
        <StatCard
          icon={CheckCircle2}
          label="Students Passed"
          value={stats.passed}
          gradient="amber"
          desc={`out of ${stats.total} students`}
          delay={160}
        />
        <StatCard
          icon={CalendarCheck}
          label="Average Attendance"
          value={stats.avgAttendance}
          suffix="%"
          decimals={1}
          gradient="rose"
          desc="This semester"
          delay={240}
        />
      </div>
      <div className="section-card">
        <h2>Recent Students</h2>
        <p className="section-sub">Latest records added to the system</p>
        <StudentTable students={students.slice(0, 5)} />
      </div>
      <div className="section-card">
        <h2>Performance Overview</h2>
        <p className="section-sub">Number of students in each grade band</p>
        <PerformanceChart data={gradeDistribution} dataKey="total" nameKey="name" height={260} />
      </div>
    </>
  );
}
