import React, { useMemo } from "react";
import { TrendingUp, TrendingDown, Percent, CalendarCheck } from "lucide-react";
import students from "../data/students.js";
import { getStudentSummary } from "../utils/calculations.js";
import StatCard from "../components/StatCard.jsx";
import PerformanceChart from "../components/PerformanceChart.jsx";
export default function Analytics() {
  const summaries = useMemo(() => students.map((s) => getStudentSummary(s)), []);
  const stats = useMemo(() => {
    const pcts = summaries.map((s) => s.percentage);
    const avg = pcts.reduce((a, b) => a + b, 0) / pcts.length;
    const highest = Math.max(...pcts);
    const lowest = Math.min(...pcts);
    const passRate = (summaries.filter((s) => s.status === "Pass").length / summaries.length) * 100;
    const avgAttendance = summaries.reduce((a, s) => a + s.attendance, 0) / summaries.length;
    return { avg, highest, lowest, passRate, avgAttendance };
  }, [summaries]);
  const gradeDistribution = useMemo(() => {
    const counts = {};
    summaries.forEach((s) => {
      counts[s.overallGrade] = (counts[s.overallGrade] || 0) + 1;
    });
    return ["O", "A+", "A", "B+", "B", "C", "F"]
      .filter((g) => counts[g])
      .map((g) => ({ name: g, total: counts[g] }));
  }, [summaries]);
  const subjectAverages = useMemo(() => {
    const bySubject = {};
    students.forEach((student) => {
      getStudentSummary(student).subjectResults.forEach((sub) => {
        if (!bySubject[sub.code]) bySubject[sub.code] = { name: sub.code, sum: 0, count: 0 };
        bySubject[sub.code].sum += sub.total;
        bySubject[sub.code].count += 1;
      });
    });
    return Object.values(bySubject).map((s) => ({
      name: s.name,
      total: Math.round((s.sum / s.count) * 10) / 10,
    }));
  }, []);
  return (
    <>
      <div className="page-header">
        <h1>Performance Analytics</h1>
        <p>Class-wide academic performance at a glance</p>
      </div>
      <div className="stat-grid">
        <StatCard icon={TrendingUp} label="Highest Percentage" value={stats.highest} suffix="%" decimals={1} gradient="teal" />
        <StatCard icon={TrendingDown} label="Lowest Percentage" value={stats.lowest} suffix="%" decimals={1} gradient="rose" delay={80} />
        <StatCard icon={Percent} label="Pass Percentage" value={stats.passRate} suffix="%" decimals={1} gradient="blue" delay={160} />
        <StatCard icon={CalendarCheck} label="Average Attendance" value={stats.avgAttendance} suffix="%" decimals={1} gradient="amber" delay={240} />
      </div>
      <div className="section-card">
        <h2>Grade Distribution</h2>
        <p className="section-sub">Number of students achieving each grade</p>
        <PerformanceChart data={gradeDistribution} height={260} />
      </div>
      <div className="section-card">
        <h2>Subject-wise Average</h2>
        <p className="section-sub">Average total marks (out of 100) across all students, per subject</p>
        <PerformanceChart data={subjectAverages} height={260} />
      </div>
    </>
  );
}