export function ProgressBar({
  percent,
  inverted = false,
  size = "md",
}: {
  percent: number;
  inverted?: boolean;
  size?: "sm" | "md";
}) {
  return (
    <div
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`w-full overflow-hidden rounded-full ${size === "sm" ? "h-1.5" : "h-2.5"} ${
        inverted ? "bg-graphite-foreground/15" : "bg-foreground/10"
      }`}
    >
      <div
        className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
