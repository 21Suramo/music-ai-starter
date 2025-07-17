// app/layout.tsx
import "./globals.css";
import { GeistSans } from "geist/font/sans"; // Optionnel : police depuis @next/font
import { useThemeStore } from "@/lib/useThemeStore"; // Zustand (client)
import { ReactNode } from "react";

export const metadata = {
  title: "MySongGift",
  description: "Générateur de chansons personnalisées par IA",
};

// ⚠️ Nécessaire si tu veux faire du rendu client (ex : Zustand pour le thème)
export default function RootLayout({ children }: { children: ReactNode }) {
  // Pour éviter les erreurs hydration, force ce fichier en client :
  // → Ajoute `"use client";` seulement si tu veux manipuler Zustand ici.
  const theme = useThemeStore((state) => state.theme); // "light" | "dark"

  return (
    <html
      lang="fr"
      className={theme === "dark" ? "dark" : ""}
      suppressHydrationWarning>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
