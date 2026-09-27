import React, { useEffect, useState } from "react";
import { getAttendanceLevel } from "../utils/calculations.js";

const RADIUS = 74;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function AttendanceCard({ overall, subjects }) {
  const [animatedPct, setAnimatedPct] = useState(0);
  const [barsIn, setBarsIn] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setAnimatedPct(overall), 150);
    const t2 = setTimeout(() => setBarsIn(true), 150);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [overall]);

  const offset = CIRCUMFERENCE - (animatedPct / 100) * CIRCUMFERENCE;

  return (
    <div className="attendance-layout">
      <div className="progress-ring">
        <svg viewBox="0 0 170 170">
          <circle className="track" cx="85" cy="85" r={RADIUS} />
          <circle
            className="fill"
            cx="85"
            cy="85"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="ring-label">
          <b>{overall}%</b>
          <span>Overall</span>
        </div>
      </div>

      <div className="attendance-bars">
        {subjects.map((s) => {
          const level = getAttendanceLevel(s.attendance);
          return (
            <div className="attendance-row" key={s.code}>
              <span>{s.name}</span>
              <div className="attendance-track">
                <div
                  className={`attendance-fill ${level}`}
                  style={{ width: barsIn ? `${s.attendance}%` : "0%" }}
                />
              </div>
              <span>{s.attendance}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
