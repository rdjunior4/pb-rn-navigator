export function FinalGoal() {
  return (
    <section className="border-b border-hairline py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-20 lg:px-8">
        <div className="min-w-0">
          <p className="eyebrow text-primary">Objetivo Final</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Transformar o e-commerce em uma verdadeira{" "}
            <span className="text-primary">Plataforma Digital B2B</span>.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Capaz de vender, recomendar, reativar, fidelizar e orientar decisões comerciais.
          </p>
        </div>

        <div className="rounded-3xl border border-hairline bg-surface p-8 shadow-lift print-block sm:p-10">
          <p className="eyebrow text-muted-foreground">Meta</p>
          <p className="mt-5 font-display text-5xl font-extrabold leading-none text-primary sm:text-6xl">
            15%–30%
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            do faturamento total pelo canal digital
          </p>
        </div>
      </div>
    </section>
  );
}
