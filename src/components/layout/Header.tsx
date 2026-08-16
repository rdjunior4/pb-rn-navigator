import { useState } from "react";
import { Logo } from "@/components/brand/Logo";

const links = [
  { href: "#visao-geral", label: "Visão Geral" },
  { href: "#checklist", label: "Checklist" },
  { href: "#roadmap", label: "Roadmap 90 dias" },
  { href: "#resultados", label: "Resultados" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-4xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <a href="#topo" className="flex min-w-0 items-center" aria-label="PB & RN Foods — início">
          <Logo className="h-9 sm:h-10" />
        </a>

        <div className="flex shrink-0 items-center gap-1">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => window.print()}
            className="ml-1 hidden rounded-lg border border-hairline px-3.5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary sm:inline-flex"
          >
            Exportar / Imprimir
          </button>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-hairline lg:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-background px-5 py-3 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 text-sm font-medium text-foreground"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              window.print();
            }}
            className="mt-1 w-full rounded-lg border border-hairline px-3 py-3 text-sm font-semibold"
          >
            Exportar / Imprimir
          </button>
        </nav>
      )}
    </header>
  );
}
