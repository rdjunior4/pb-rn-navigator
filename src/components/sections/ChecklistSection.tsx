import type { ChecklistSectionData } from "@/data/checklist";
import { ChecklistItem } from "@/components/checklist/ChecklistItem";
import { ProgressBar } from "@/components/checklist/ProgressBar";
import { useChecklist } from "@/hooks/use-checklist";

export function ObjectiveCallout({ text }: { text: string }) {
  return (
    <p className="mt-8 border-l-2 border-primary pl-5 text-base font-medium leading-relaxed text-foreground print-block">
      <span className="eyebrow mr-2 text-primary">Objetivo</span>
      {text}
    </p>
  );
}

export function ChecklistSection({
  section,
  children,
}: {
  section: ChecklistSectionData;
  children?: React.ReactNode;
}) {
  const { progressFor } = useChecklist();
  const progress = progressFor(section.items.map((i) => i.id));

  return (
    <section id={section.id} className="border-b border-hairline py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              <span className="text-primary">{section.index}.</span> {section.title}
            </h2>
            {section.support && (
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                {section.support}
              </p>
            )}
            <div className="mt-6 max-w-xs">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Concluído</span>
                <span className="font-semibold tabular-nums">
                  {progress.done}/{progress.total}
                </span>
              </div>
              <ProgressBar percent={progress.percent} size="sm" />
            </div>
          </div>

          <div className="min-w-0">
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {section.items.map((item) => (
                <ChecklistItem key={item.id} id={item.id} label={item.label} />
              ))}
            </ul>
            {children}
            {section.objective && <ObjectiveCallout text={section.objective} />}
          </div>
        </div>
      </div>
    </section>
  );
}
