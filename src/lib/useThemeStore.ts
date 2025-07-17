import { create } from "zustand";

type ThemeState = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",
  toggleTheme: () => {
    const current = get().theme;
    const next = current === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    set({ theme: next });
  },
}));
