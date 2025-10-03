import "@/styles/globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cn } from "@/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TCG Master",
  description: "El mejor lugar para comprar cartas TCG en Latinoamérica",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn("antialiased", montserrat.className)}>
        {children}
      </body>
    </html>
  );
}
