import { useEffect, useState } from "react";
import { pillars } from "@/data/checklist";

export function NavigationTabs() {
  const [active, setActive] = useState<string>(pillars[0]?.id ?? "");

  useEffect(() => {
    const sections = pillars
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Pilares da transformação"
      className="no-print sticky top-[66px] z-40 border-b border-hairline bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-4xl items-center gap-3 px-5 lg:px-8">
        <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground lg:block">
          Pilares
        </span>
        <ul className="-mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pillars.map((p) => {
            const isActive = active === p.id;
            return (
              <li key={p.id} className="shrink-0 snap-start">
                <a
                  href={`#${p.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-hairline text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {p.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
