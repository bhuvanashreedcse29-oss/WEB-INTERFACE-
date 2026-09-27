import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";
import ReportCard from "./pages/ReportCard.jsx";
import Analytics from "./pages/Analytics.jsx";
import About from "./pages/About.jsx";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="students" element={<Students />} />
        <Route path="students/:id" element={<StudentDetails />} />
        <Route path="report-card/:id" element={<ReportCard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
