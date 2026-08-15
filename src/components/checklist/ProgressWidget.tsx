import { useEffect, useRef, useState } from "react";
import { useChecklist } from "@/hooks/use-checklist";
import { ProgressBar } from "@/components/checklist/ProgressBar";

function useAnimatedNumber(value: number, duration = 700) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    if (from === to) return;

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  return display;
}

export function ProgressWidget() {
  const { overall } = useChecklist();
  const percent = useAnimatedNumber(overall.percent);

  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-50 lg:inset-x-auto lg:bottom-6 lg:right-6">
      <div className="mx-auto max-w-7xl px-4 pb-3 lg:px-0 lg:pb-0">
        <div className="progress-widget-pulse flex items-center gap-4 rounded-2xl border border-primary/30 bg-graphite/95 px-5 py-3 text-graphite-foreground shadow-lift backdrop-blur lg:w-[360px]">
          <span className="status-dot shrink-0" aria-hidden />
          <div className="min-w-0 flex-1">
            <div className="flex items-end justify-between gap-3">
              <span className="eyebrow text-graphite-muted">Progresso da Transformação</span>
              <span className="font-display text-2xl font-extrabold tabular-nums text-primary">
                {percent}%
              </span>
            </div>
            <div className="progress-bar-shimmer mt-2">
              <ProgressBar percent={overall.percent} inverted size="sm" />
            </div>
            <p className="mt-1.5 text-xs text-graphite-muted">
              {overall.done} de {overall.total} ações concluídas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
