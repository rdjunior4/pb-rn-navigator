/**
 * Storage adapter for checklist state.
 *
 * The UI only depends on this interface, so swapping localStorage for a
 * database (Lovable Cloud / API) later requires no changes in components.
 */
export type ChecklistState = Record<string, boolean>;

export interface ChecklistStorage {
  load(): Promise<ChecklistState>;
  save(state: ChecklistState): Promise<void>;
}

const STORAGE_KEY = "pbrn-b2b-checklist-v1";

export const localChecklistStorage: ChecklistStorage = {
  async load() {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as ChecklistState) : {};
    } catch {
      return {};
    }
  },
  async save(state) {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota errors */
    }
  },
};
