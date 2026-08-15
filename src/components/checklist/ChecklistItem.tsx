import { useChecklist } from "@/hooks/use-checklist";

export function ChecklistItem({ id, label }: { id: string; label: string }) {
  const { state, toggle } = useChecklist();
  const done = !!state[id];

  return (
    <li className="print-block">
      <button
        type="button"
        role="checkbox"
        aria-checked={done}
        onClick={() => toggle(id)}
        className={`group flex w-full items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 sm:py-3 ${
          done
            ? "border-primary/25 bg-primary/[0.04]"
            : "border-hairline bg-surface hover:border-foreground/20 hover:shadow-soft"
        }`}
      >
        <span
          aria-hidden
          className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border transition-all duration-200 ${
            done
              ? "scale-100 border-primary bg-primary text-primary-foreground"
              : "border-foreground/25 bg-background group-hover:border-primary/60"
          }`}
        >
          <svg viewBox="0 0 20 20" className={`size-3.5 transition-opacity ${done ? "opacity-100" : "opacity-0"}`}>
            <path
              d="M4 10.5l4 4 8-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
          className={`min-w-0 text-[0.95rem] leading-snug transition-colors ${
            done ? "text-muted-foreground line-through decoration-primary/40" : "text-foreground"
          }`}
        >
          {label}
        </span>
      </button>
    </li>
  );
}
