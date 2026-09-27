import React, { useEffect, useState } from "react";
function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame;
    const start = performance.now();
    const from = 0;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + (target - from) * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}
export default function StatCard({ icon: Icon, label, value, suffix = "", desc, gradient, decimals = 0, delay = 0 }) {
  const animated = useCountUp(value);
  return (
    <div className={`stat-card grad-${gradient}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="icon-wrap">
        <Icon size={20} color="#fff" />
      </div>
      <div className="stat-value">
        {animated.toFixed(decimals)}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
      {desc && <div className="stat-desc">{desc}</div>}
    </div>
  );
}
