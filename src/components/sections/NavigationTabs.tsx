import { pillars } from "@/data/checklist";

export function NavigationTabs() {
  return (
    <nav
      aria-label="Pilares da transformação"
      className="no-print sticky top-[66px] z-40 border-b border-hairline bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ul className="-mx-1 flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pillars.map((p) => (
            <li key={p.id} className="shrink-0">
              <a
                href={`#${p.id}`}
                className="inline-flex rounded-full border border-hairline px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {p.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
