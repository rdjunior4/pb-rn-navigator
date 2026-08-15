import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { allItemIds } from "@/data/checklist";
import {
  localChecklistStorage,
  type ChecklistState,
  type ChecklistStorage,
} from "@/lib/checklist-storage";

type ChecklistContextValue = {
  state: ChecklistState;
  ready: boolean;
  toggle: (id: string) => void;
  checkAll: () => void;
  clearAll: () => void;
  progressFor: (ids: string[]) => { done: number; total: number; percent: number };
  overall: { done: number; total: number; percent: number };
};

const ChecklistContext = createContext<ChecklistContextValue | null>(null);

export function ChecklistProvider({
  children,
  storage = localChecklistStorage,
}: {
  children: ReactNode;
  storage?: ChecklistStorage;
}) {
  const [state, setState] = useState<ChecklistState>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    storage.load().then((loaded) => {
      if (!active) return;
      setState(loaded);
      setReady(true);
    });
    return () => {
      active = false;
    };
  }, [storage]);

  const commit = useCallback(
    (next: ChecklistState) => {
      setState(next);
      void storage.save(next);
    },
    [storage],
  );

  const toggle = useCallback(
    (id: string) => commit({ ...state, [id]: !state[id] }),
    [commit, state],
  );

  const checkAll = useCallback(() => {
    commit(Object.fromEntries(allItemIds.map((id) => [id, true])));
  }, [commit]);

  const clearAll = useCallback(() => commit({}), [commit]);

  const progressFor = useCallback(
    (ids: string[]) => {
      const total = ids.length;
      const done = ids.filter((id) => state[id]).length;
      return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
    },
    [state],
  );

  const overall = useMemo(() => {
    const total = allItemIds.length;
    const done = allItemIds.filter((id) => state[id]).length;
    return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
  }, [state]);

  const value = useMemo(
    () => ({ state, ready, toggle, checkAll, clearAll, progressFor, overall }),
    [state, ready, toggle, checkAll, clearAll, progressFor, overall],
  );

  return <ChecklistContext.Provider value={value}>{children}</ChecklistContext.Provider>;
}

export function useChecklist() {
  const ctx = useContext(ChecklistContext);
  if (!ctx) throw new Error("useChecklist must be used inside ChecklistProvider");
  return ctx;
}
