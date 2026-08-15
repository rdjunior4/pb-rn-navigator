import { useState } from "react";
import { useChecklist } from "@/hooks/use-checklist";

export function ChecklistControls() {
  const { checkAll, clearAll, overall } = useChecklist();
  const [confirming, setConfirming] = useState(false);

  return (
    <div id="checklist" className="border-b border-hairline bg-background">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center lg:px-8">
        <div className="min-w-0">
          <h2 className="text-lg font-extrabold">Checklist da transformação</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {overall.done} de {overall.total} ações concluídas · salvo automaticamente neste navegador
          </p>
        </div>
        <div className="no-print flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={checkAll}
            className="rounded-lg border border-hairline px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground/30 hover:bg-accent"
          >
            Marcar todos
          </button>
          <button
            type="button"
            onClick={() => setConfirming(true)}
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Limpar checklist
          </button>
        </div>
      </div>

      {confirming && (
        <div
          className="no-print fixed inset-0 z-[60] grid place-items-center bg-graphite/60 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Confirmar limpeza do checklist"
        >
          <div className="w-full max-w-md rounded-2xl bg-surface p-7 shadow-lift">
            <h3 className="text-xl font-extrabold">Limpar todo o checklist?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Todas as marcações de progresso serão apagadas deste navegador. Esta ação não pode ser
              desfeita.
            </p>
            <div className="mt-7 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setConfirming(false)}
                className="rounded-lg border border-hairline px-4 py-2.5 text-sm font-semibold hover:bg-accent"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  clearAll();
                  setConfirming(false);
                }}
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Sim, limpar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
