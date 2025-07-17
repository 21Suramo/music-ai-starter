import { create } from "zustand";

interface Store {
  selectedFor: "Myself" | "Someone" | null;
  setSelected: (v: "Myself" | "Someone") => void;
  step: number;
  next: () => void;
  prev: () => void;
  tones: string[];
  setTones: (t: string[]) => void;
}

export const useWizardStore = create<Store>((set) => ({
  selectedFor: null,
  setSelected: (v) => set({ selectedFor: v }),
  step: 0,
  next: () => set((s) => ({ step: Math.min(s.step + 1, 3) })),
  prev: () => set((s) => ({ step: Math.max(s.step - 1, 0) })),
  tones: [],
  setTones: (t) => set({ tones: t }),
}));
