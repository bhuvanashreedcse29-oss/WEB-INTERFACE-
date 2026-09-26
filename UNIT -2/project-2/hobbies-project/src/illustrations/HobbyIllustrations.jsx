import React from "react";

/**
 * Original hand-coded flat-style character illustrations.
 * Each one shares a common "bust" base (head, hair, shoulders)
 * and swaps in a hobby-specific prop + accent colors.
 *
 * These are plain inline SVG, so they scale perfectly and can be
 * recolored just by changing the props below — no image files needed.
 */

function Base({ id, hair, skin = "#ffd9c7", outfit, prop, glow }) {
  return (
    <svg viewBox="0 0 320 320" className="hobby-illustration" role="img">
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.55" />
          <stop offset="100%" stopColor={glow} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`hair-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={hair[0]} />
          <stop offset="100%" stopColor={hair[1]} />
        </linearGradient>
        <linearGradient id={`outfit-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={outfit[0]} />
          <stop offset="100%" stopColor={outfit[1]} />
        </linearGradient>
      </defs>

      <circle cx="160" cy="150" r="150" fill={`url(#glow-${id})`} />

      {/* back hair */}
      <path
        d="M75 150 Q60 260 100 300 L220 300 Q260 260 245 150 Q250 70 160 55 Q70 70 75 150 Z"
        fill={`url(#hair-${id})`}
      />

      {/* shoulders / outfit */}
      <path
        d="M95 235 Q160 205 225 235 L250 300 L70 300 Z"
        fill={`url(#outfit-${id})`}
      />

      {/* neck */}
      <rect x="142" y="205" width="36" height="35" fill={skin} />

      {/* face */}
      <ellipse cx="160" cy="160" rx="72" ry="78" fill={skin} />

      {/* front hair / bangs */}
      <path
        d="M88 145 Q80 70 160 60 Q240 70 232 145 Q220 95 160 92 Q100 95 88 145 Z"
        fill={`url(#hair-${id})`}
      />

      {/* closed, content eyes */}
      <path
        d="M118 168 Q128 176 140 168"
        stroke="#2b2530"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M180 168 Q192 176 202 168"
        stroke="#2b2530"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* blush */}
      <ellipse cx="123" cy="188" rx="10" ry="6" fill="#ff9f9f" opacity="0.5" />
      <ellipse cx="197" cy="188" rx="10" ry="6" fill="#ff9f9f" opacity="0.5" />

      {/* mouth */}
      <path
        d="M150 200 Q160 208 170 200"
        stroke="#c96b6b"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {prop}
    </svg>
  );
}

export function MusicIllustration() {
  return (
    <Base
      id="music"
      hair={["#8b5cf6", "#4c1d95"]}
      outfit={["#a78bfa", "#6d28d9"]}
      glow="#a855f7"
      prop={
        <g>
          {/* headphone band */}
          <path
            d="M95 150 Q160 70 225 150"
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
          {/* ear cups */}
          <rect x="80" y="140" width="26" height="42" rx="12" fill="#d8b4fe" />
          <rect x="214" y="140" width="26" height="42" rx="12" fill="#d8b4fe" />
          <rect x="86" y="146" width="14" height="30" rx="7" fill="#7c3aed" />
          <rect x="220" y="146" width="14" height="30" rx="7" fill="#7c3aed" />
          {/* floating music notes */}
          <text x="245" y="110" fontSize="26" fill="#e9d5ff">♪</text>
          <text x="30" y="130" fontSize="20" fill="#e9d5ff">♫</text>
        </g>
      }
    />
  );
}

export function MovieIllustration() {
  return (
    <Base
      id="movie"
      hair={["#f97316", "#9a3412"]}
      outfit={["#fb923c", "#c2410c"]}
      glow="#fb923c"
      prop={
        <g>
          {/* 3D glasses */}
          <rect x="105" y="155" width="46" height="30" rx="8" fill="#ef4444" opacity="0.85" />
          <rect x="169" y="155" width="46" height="30" rx="8" fill="#38bdf8" opacity="0.85" />
          <rect x="151" y="166" width="18" height="6" fill="#1f2937" />
          {/* popcorn bucket */}
          <path d="M118 250 L130 300 L190 300 L202 250 Z" fill="#fef3c7" />
          <path
            d="M118 250 L202 250"
            stroke="#ef4444"
            strokeWidth="8"
          />
          <circle cx="140" cy="238" r="10" fill="#fffbeb" />
          <circle cx="160" cy="230" r="11" fill="#fffbeb" />
          <circle cx="182" cy="238" r="10" fill="#fffbeb" />
        </g>
      }
    />
  );
}

export function TravelIllustration() {
  return (
    <Base
      id="travel"
      hair={["#38bdf8", "#0369a1"]}
      outfit={["#7dd3fc", "#0284c7"]}
      glow="#38bdf8"
      prop={
        <g>
          {/* sun hat brim */}
          <ellipse cx="160" cy="95" rx="95" ry="16" fill="#fde68a" />
          <ellipse cx="160" cy="80" rx="45" ry="22" fill="#fcd34d" />
          {/* sunglasses */}
          <rect x="112" y="158" width="40" height="24" rx="10" fill="#1f2937" />
          <rect x="168" y="158" width="40" height="24" rx="10" fill="#1f2937" />
          <rect x="152" y="166" width="16" height="6" fill="#1f2937" />
          {/* little plane */}
          <path
            d="M250 60 l18 6 l-9 4 l3 9 l-8 -4 l-3 8 l-4 -9 l-9 3 l6 -8 l-8 -4 l9 -2 l-2 -9 Z"
            fill="#e0f2fe"
          />
        </g>
      }
    />
  );
}

export function ReadingIllustration() {
  return (
    <Base
      id="reading"
      hair={["#fbbf24", "#b45309"]}
      outfit={["#fcd34d", "#d97706"]}
      glow="#fbbf24"
      prop={
        <g>
          {/* glasses */}
          <circle cx="132" cy="167" r="17" fill="none" stroke="#78350f" strokeWidth="4" />
          <circle cx="188" cy="167" r="17" fill="none" stroke="#78350f" strokeWidth="4" />
          <path d="M149 167 L171 167" stroke="#78350f" strokeWidth="4" />
          {/* open book */}
          <path d="M100 255 L160 245 L160 285 L100 295 Z" fill="#fefce8" />
          <path d="M220 255 L160 245 L160 285 L220 295 Z" fill="#fef9c3" />
          <path d="M100 255 L160 245 L220 255" stroke="#ca8a04" strokeWidth="3" fill="none" />
        </g>
      }
    />
  );
}

export function GamingIllustration() {
  return (
    <Base
      id="gaming"
      hair={["#34d399", "#065f46"]}
      outfit={["#6ee7b7", "#047857"]}
      glow="#34d399"
      prop={
        <g>
          {/* headset */}
          <path d="M95 150 Q160 75 225 150" stroke="#a7f3d0" strokeWidth="9" fill="none" strokeLinecap="round" />
          <rect x="82" y="142" width="24" height="38" rx="11" fill="#059669" />
          <rect x="214" y="142" width="24" height="38" rx="11" fill="#059669" />
          {/* controller */}
          <rect x="118" y="255" width="84" height="44" rx="20" fill="#111827" />
          <circle cx="140" cy="277" r="7" fill="#34d399" />
          <circle cx="180" cy="270" r="6" fill="#f472b6" />
          <circle cx="192" cy="282" r="6" fill="#60a5fa" />
        </g>
      }
    />
  );
}

export function PhotographyIllustration() {
  return (
    <Base
      id="photo"
      hair={["#818cf8", "#3730a3"]}
      outfit={["#a5b4fc", "#4338ca"]}
      glow="#818cf8"
      prop={
        <g>
          {/* camera strap */}
          <path d="M110 205 L160 260 L210 205" stroke="#4338ca" strokeWidth="6" fill="none" />
          {/* camera body */}
          <rect x="122" y="255" width="76" height="52" rx="10" fill="#312e81" />
          <circle cx="160" cy="281" r="20" fill="#1e1b4b" />
          <circle cx="160" cy="281" r="12" fill="#818cf8" />
          <rect x="178" y="248" width="18" height="12" rx="3" fill="#312e81" />
        </g>
      }
    />
  );
}

export function CookingIllustration() {
  return (
    <Base
      id="cooking"
      hair={["#fb7185", "#9f1239"]}
      outfit={["#fda4af", "#be123c"]}
      glow="#fb7185"
      prop={
        <g>
          {/* chef hat */}
          <path
            d="M118 90 Q110 40 160 42 Q210 40 202 90 Q212 100 202 110 L118 110 Q108 100 118 90 Z"
            fill="#fff7ed"
          />
          <rect x="118" y="105" width="84" height="14" fill="#fff7ed" />
          {/* whisk */}
          <line x1="215" y1="230" x2="245" y2="200" stroke="#a3a3a3" strokeWidth="5" strokeLinecap="round" />
          <path
            d="M245 200 Q260 180 250 165 M245 200 Q265 190 258 172 M245 200 Q255 215 235 205"
            stroke="#d4d4d8"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      }
    />
  );
}
