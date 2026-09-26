import React from "react";
import {
  MusicIllustration,
  MovieIllustration,
  TravelIllustration,
  ReadingIllustration,
  GamingIllustration,
  PhotographyIllustration,
  CookingIllustration,
} from "../illustrations/HobbyIllustrations";

const ILLUSTRATIONS = {
  music: MusicIllustration,
  movie: MovieIllustration,
  travel: TravelIllustration,
  reading: ReadingIllustration,
  gaming: GamingIllustration,
  photo: PhotographyIllustration,
  cooking: CookingIllustration,
};

export default function HobbyCard({ hobby, index = 0, visible }) {
  const Illustration = ILLUSTRATIONS[hobby.key];

  return (
    <div
      className={`hobby-card ${visible ? "is-visible" : ""}`}
      style={{
        "--accent": hobby.gradient,
        transitionDelay: visible ? `${120 + index * 90}ms` : "0ms",
      }}
    >
      <div className="hobby-card__glow" />
      <div className="hobby-card__inner">
        <div className="hobby-card__hero">
          <Illustration />
        </div>
        <div className="hobby-card__body">
          <h3>{hobby.title}</h3>
          <p>{hobby.description}</p>
        </div>
        <div className="hobby-card__underline" />
      </div>
    </div>
  );
}
