import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";
const COLORS = ["#3b6cf6", "#22d3ee", "#2dd4bf", "#f5a524", "#a78bfa", "#f43f5e"];
export default function PerformanceChart({ data, dataKey = "total", nameKey = "name", height = 300 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 8, right: 12, left: -12, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef1fb" />
        <XAxis
          dataKey={nameKey}
          tick={{ fontSize: 11, fill: "#6b7390" }}
          tickLine={false}
          axisLine={{ stroke: "#eef1fb" }}
          interval={0}
          angle={-18}
          textAnchor="end"
          height={60}
        />
        <YAxis tick={{ fontSize: 11, fill: "#6b7390" }} tickLine={false} axisLine={false} />
        <Tooltip
          cursor={{ fill: "rgba(59,108,246,0.06)" }}
          contentStyle={{ borderRadius: 10, border: "1px solid #e6e9f5", fontSize: "0.82rem" }}
        />
        <Bar dataKey={dataKey} radius={[8, 8, 0, 0]} animationDuration={900} animationEasing="ease-out">
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}