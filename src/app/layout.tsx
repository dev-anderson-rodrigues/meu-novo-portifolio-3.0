/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./styles/globals.css";
import { Poppins, Platypi, Alike_Angular } from "next/font/google"; // Corrigindo para 'next/font/google'
import { Providers } from "../app/providers";

export const metadata: Metadata = {
  title: "Anderson Rodrigues | DEV",
  description: "Portifólio de um desenvolvedor fullstack, expertise em nodejs",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});
const platypi = Platypi({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const alikeAngular = Alike_Angular({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <Providers>
        <body
          className={`${poppins.className} ${platypi.className} ${alikeAngular.className}`}
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
