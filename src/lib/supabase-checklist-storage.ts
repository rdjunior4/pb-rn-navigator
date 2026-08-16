import type { ChecklistState, ChecklistStorage } from "./checklist-storage";
import {
  CHECKLIST_ROW_ID,
  CHECKLIST_TABLE,
  isSupabaseConfigured,
  supabase,
} from "./supabase";

/**
 * Supabase-backed storage. A single shared board row (id = "default") holds the
 * whole checklist state as JSONB, so every connected client sees the same board.
 * Use `subscribeChecklist` for realtime updates pushed from the database.
 */
export const supabaseChecklistStorage: ChecklistStorage = {
  async load() {
    if (!supabase) return {};
    const { data, error } = await supabase
      .from(CHECKLIST_TABLE)
      .select("state")
      .eq("id", CHECKLIST_ROW_ID)
      .maybeSingle();
    if (error) {
      console.error("[supabase] load failed", error.message);
      return {};
    }
    return (data?.state as ChecklistState) ?? {};
  },
  async save(state: ChecklistState) {
    if (!supabase) return;
    const { error } = await supabase
      .from(CHECKLIST_TABLE)
      .upsert({
        id: CHECKLIST_ROW_ID,
        state,
        updated_at: new Date().toISOString(),
      });
    if (error) console.error("[supabase] save failed", error.message);
  },
};

export function subscribeChecklist(onChange: (state: ChecklistState) => void) {
  const client = supabase;
  if (!client) return () => {};
  const channel = client
    .channel("checklist_state_changes")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: CHECKLIST_TABLE },
      (payload) => {
        const row = payload.new as { state?: ChecklistState } | null;
        if (row?.state) onChange(row.state);
      },
    )
    .subscribe();
  return () => {
    client.removeChannel(channel);
  };
}

export { isSupabaseConfigured };
