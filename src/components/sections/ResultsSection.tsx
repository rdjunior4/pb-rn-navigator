import { results } from "@/data/checklist";

export function ResultsSection() {
  return (
    <section id="resultados" className="bg-graphite pb-32 pt-20 text-graphite-foreground print-light lg:pb-44 lg:pt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow text-primary">Impacto no negócio</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Resultados Esperados
        </h2>

        <div className="mt-14 grid gap-x-14 gap-y-0 md:grid-cols-2">
          {results.map((r, i) => (
            <div
              key={r}
              className="flex items-baseline gap-6 border-t border-graphite-foreground/12 py-6 print-block"
            >
              <span className="font-display text-sm font-bold tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold leading-snug sm:text-xl">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
