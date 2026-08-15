import { useState } from "react";

/**
 * Renders the PB & RN Foods logo asset.
 * Proportions and colors untouched — the component only scales it.
 */
export function Logo({ className = "h-11", inverted = false }: { className?: string; inverted?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`inline-flex items-center font-display text-base font-extrabold tracking-tight ${
          inverted ? "text-graphite-foreground" : "text-foreground"
        }`}
      >
        PB&nbsp;<span className="text-primary">&amp;</span>&nbsp;RN FOODS
      </span>
    );
  }

  return (
    <img
      src="/logo-pbrn-black.png"
      alt="PB & RN Foods"
      onError={() => setFailed(true)}
      className={`w-auto object-contain ${className}`}
      style={inverted ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
}
