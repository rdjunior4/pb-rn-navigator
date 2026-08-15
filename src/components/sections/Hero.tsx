import { useChecklist } from "@/hooks/use-checklist";
import { ProgressBar } from "@/components/checklist/ProgressBar";

export function Hero() {
  const { overall } = useChecklist();

  return (
    <section id="visao-geral" className="relative overflow-hidden border-b border-hairline">
      <div className="hairline-grid absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
        <div className="min-w-0">
          <p className="eyebrow text-primary">Plataforma Digital B2B</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Transformação <span className="text-primary">Digital Comercial</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Do catálogo digital a uma plataforma capaz de vender, recomendar, reativar, fidelizar e
            orientar decisões comerciais.
          </p>

          <div className="mt-10 max-w-xl rounded-2xl border border-hairline bg-surface p-6 shadow-soft print-block">
            <div className="flex items-end justify-between gap-4">
              <span className="eyebrow text-muted-foreground">Progresso da Transformação</span>
              <span className="font-display text-3xl font-extrabold tabular-nums text-foreground">
                {overall.percent}%
              </span>
            </div>
            <div className="mt-4">
              <ProgressBar percent={overall.percent} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {overall.done} de {overall.total} ações concluídas
            </p>
          </div>
        </div>

        <aside className="min-w-0 self-start rounded-3xl bg-graphite p-8 text-graphite-foreground shadow-lift print-block sm:p-10">
          <p className="eyebrow text-graphite-muted">Meta Estratégica</p>
          <p className="mt-6 font-display text-5xl font-extrabold leading-none text-primary sm:text-6xl">
            15%–30%
          </p>
          <p className="mt-4 text-sm leading-relaxed text-graphite-muted">
            do faturamento total pelo canal digital.
          </p>
          <div className="my-8 h-px bg-graphite-foreground/15" />
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl font-extrabold">90 dias</span>
            <span className="text-sm text-graphite-muted">para a primeira virada</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
