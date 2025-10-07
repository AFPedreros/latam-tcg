import "@/styles/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { cn } from "@/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={cn("antialiased", poppins.className)}>
        <Navbar />
        <div className="flex flex-col">
          <div className="flex-1">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
