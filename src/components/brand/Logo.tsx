import { useState } from "react";
import logoAsset from "@/assets/pbrn-foods-logo.png.asset.json";

/**
 * Renders the original PB & RN Foods logo asset.
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
      src={logoAsset.url}
      alt="PB & RN Foods"
      onError={() => setFailed(true)}
      className={`w-auto object-contain ${className}`}
      style={inverted ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
}
