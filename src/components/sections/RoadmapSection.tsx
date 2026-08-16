import { roadmap } from "@/data/checklist";
import { ChecklistItem } from "@/components/checklist/ChecklistItem";
import { ProgressBar } from "@/components/checklist/ProgressBar";
import { useChecklist } from "@/hooks/use-checklist";
import type { RoadmapPhaseData } from "@/data/checklist";

function RoadmapPhase({ phase }: { phase: RoadmapPhaseData }) {
  const { progressFor } = useChecklist();
  const progress = progressFor(phase.items.map((i) => i.id));

  return (
    <article className="flex flex-col rounded-2xl border border-hairline bg-surface p-6 shadow-soft print-block sm:p-8">
      <div className="flex items-baseline justify-between gap-3">
        <span className="eyebrow text-primary">{phase.phase}</span>
        <span className="text-sm font-medium text-muted-foreground">{phase.period}</span>
      </div>
      <h3 className="mt-3 text-xl font-extrabold sm:text-2xl">{phase.title}</h3>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Progresso da fase</span>
          <span className="font-semibold tabular-nums">{progress.percent}%</span>
        </div>
        <ProgressBar percent={progress.percent} size="sm" />
      </div>

      <ul className="mt-6 grid gap-2.5">
        {phase.items.map((i) => (
          <ChecklistItem key={i.id} id={i.id} label={i.label} />
        ))}
      </ul>
    </article>
  );
}

export function RoadmapSection() {
  return (
    <section id="roadmap" className="border-b border-hairline bg-secondary/60 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <p className="eyebrow text-primary">Roadmap</p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Roadmap — 90 dias</h2>
        <p className="mt-3 max-w-xl text-base text-muted-foreground">
          Três ciclos para acelerar a primeira virada digital.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {roadmap.map((phase) => (
            <RoadmapPhase key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </section>
  );
}
