import { createFileRoute } from "@tanstack/react-router";
import { ChecklistProvider } from "@/hooks/use-checklist";
import { sections } from "@/data/checklist";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { NavigationTabs } from "@/components/sections/NavigationTabs";
import { ChecklistControls } from "@/components/sections/ChecklistControls";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { FinalGoal } from "@/components/sections/FinalGoal";

const title = "PB & RN Foods — Transformação Digital Comercial B2B";
const description =
  "Painel estratégico da PB & RN Foods para acompanhar a evolução do e-commerce em uma Plataforma Digital B2B: checklist, roadmap de 90 dias e resultados esperados.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function OnePlatformCallout() {
  return (
    <div className="mt-8 rounded-2xl bg-graphite px-7 py-9 text-center text-graphite-foreground shadow-lift print-block sm:px-10">
      <p className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
        UMA ÚNICA PLATAFORMA
      </p>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-graphite-muted sm:text-base">
        Compras + Promoções + CRM + Financeiro + Logística + Suporte + BI + IA
      </p>
    </div>
  );
}

function DashboardCallout() {
  return (
    <div className="mt-8 rounded-2xl border border-hairline bg-surface p-7 shadow-soft print-block">
      <p className="eyebrow text-muted-foreground">O dashboard precisa responder</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        {["O que aconteceu", "Por que aconteceu", "Qual ação tomar"].map((s, i) => (
          <div key={s} className="flex items-center gap-5">
            {i > 0 && <span className="hidden text-primary sm:inline">→</span>}
            <span className="font-display text-lg font-extrabold sm:text-xl">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <ChecklistProvider>
      <div id="topo" className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <NavigationTabs />
          <ChecklistControls />
          {sections.map((section) => (
            <ChecklistSection key={section.id} section={section}>
              {section.id === "operacao" && <OnePlatformCallout />}
              {section.id === "dashboard" && <DashboardCallout />}
            </ChecklistSection>
          ))}
          <RoadmapSection />
          <FinalGoal />
          <ResultsSection />
        </main>
        <Footer />
      </div>
    </ChecklistProvider>
  );
}
