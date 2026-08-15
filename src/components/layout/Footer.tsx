import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <Logo className="h-8" />
        <p className="shrink-0 text-right text-xs text-muted-foreground">
          Plataforma Digital B2B · Painel estratégico interno
        </p>
      </div>
    </footer>
  );
}
