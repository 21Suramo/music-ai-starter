// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeWrapper } from "@/components/ThemeWrapper";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "MySongGift",
  description: "Générateur de chansons personnalisées par IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
