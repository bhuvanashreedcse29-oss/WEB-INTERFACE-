import React from "react";
import { MusicIllustration } from "../illustrations/HobbyIllustrations";

export default function FeaturedCard({ hobby, visible }) {
  return (
    <div
      className={`featured-card ${visible ? "is-visible" : ""}`}
      style={{ "--accent": hobby.gradient }}
    >
      <div className="featured-card__glow" />
      <div className="featured-card__inner">
        <div className="featured-card__hero">
          <MusicIllustration />
        </div>
        <div className="featured-card__body">
          <div className="featured-card__title-row">
            <span className="featured-card__badge" />
            <h2>{hobby.title}</h2>
          </div>
          <p>{hobby.description}</p>
          <p className="featured-card__label">Why I Like It</p>
          <ul className="featured-card__list">
            {hobby.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
