// components/ThemeWrapper.tsx
"use client";

import { useThemeStore } from "@/lib/useThemeStore";
import { useEffect } from "react";

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return children;
};
