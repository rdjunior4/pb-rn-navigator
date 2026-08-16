import { useChecklist } from "@/hooks/use-checklist";
import { ProgressBar } from "@/components/checklist/ProgressBar";

export function Hero() {
  const { overall } = useChecklist();

  return (
    <section id="visao-geral" className="hero-aurora relative overflow-hidden border-b border-hairline">
      <div className="hairline-grid absolute inset-0 opacity-70" aria-hidden />
      <div className="hero-glow pointer-events-none absolute -left-32 -top-32 size-[28rem] rounded-full blur-3xl" aria-hidden />
      <div className="hero-glow hero-glow-2 pointer-events-none absolute -right-24 top-24 size-[22rem] rounded-full blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-16">
          <div className="min-w-0">
          <p className="eyebrow text-primary animate-rise" style={{ animationDelay: "40ms" }}>
            Plataforma Digital B2B
          </p>
          <h1
            className="mt-5 text-4xl font-extrabold leading-[1.05] animate-rise sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            Transformação <span className="text-primary">Digital Comercial</span>
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground animate-rise sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Do catálogo digital a uma plataforma capaz de vender, recomendar, reativar, fidelizar e
            orientar decisões comerciais.
          </p>

          <div
            className="mt-10 max-w-xl rounded-2xl border border-hairline bg-surface/80 p-6 shadow-soft backdrop-blur animate-rise print-block"
            style={{ animationDelay: "300ms" }}
          >
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

        <aside
          className="lift self-start rounded-3xl bg-graphite p-8 text-graphite-foreground shadow-lift animate-rise print-block sm:p-10 lg:sticky lg:top-[150px]"
          style={{ animationDelay: "260ms" }}
        >
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
      </div>
    </section>
  );
}
