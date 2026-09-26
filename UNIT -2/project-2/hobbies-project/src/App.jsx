import React, { useEffect, useState } from "react";
import FeaturedCard from "./components/FeaturedCard";
import HobbyCard from "./components/HobbyCard";
import { featured, hobbies } from "./data/hobbies";
import "./App.css";

export default function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page">
      <div className="page__glow page__glow--one" />
      <div className="page__glow page__glow--two" />

      <div className="page__content">
        <header className="page__header">
          <p className="page__eyebrow">A little about me</p>
          <h1>Hobbies</h1>
        </header>

        <FeaturedCard hobby={featured} visible={visible} />

        <div className="hobby-grid">
          {hobbies.map((hobby, i) => (
            <HobbyCard key={hobby.key} hobby={hobby} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </div>
  );
}
