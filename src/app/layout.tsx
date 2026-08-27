/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./styles/globals.css";
import { Poppins, Platypi, Alike_Angular } from "next/font/google";
import { Providers } from "../app/providers";

export const metadata: Metadata = {
  title: "Anderson Rodrigues | DEV",
  description: "Portifólio de um desenvolvedor fullstack, expertise em nodejs",
  verification: {
    google: "rPeADMfHTMCG3V3YBOjnivTp8ov8_xJRyBG_zH8YqUI",
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
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
/**
 * Roda antes da hidratação, direto no HTML. Sem isso o tema só era
 * resolvido dentro de um useEffect, o que causava dois problemas:
 * a página carregava escura e piscava para claro, e dois efeitos
 * concorrentes (um lendo, outro escrevendo) chegavam a sobrescrever
 * a preferência salva com o valor inicial.
 *
 * Resolve também a cor de marca escolhida no seletor, pelo mesmo
 * motivo: sem isso o site abriria sempre no coral e trocaria de cor
 * na frente do visitante.
 */
const themeBootstrap = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t !== 'light' && t !== 'dark') {
      t = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', t);

    var b = localStorage.getItem('brand');
    var ok = ['coral', 'ambar', 'lilas', 'champanhe'];
    document.documentElement.setAttribute(
      'data-brand',
      ok.indexOf(b) === -1 ? 'coral' : b
    );
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.setAttribute('data-brand', 'coral');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeBootstrap }}
        />
      </head>
      <body
        className={`${poppins.className} ${platypi.className} ${alikeAngular.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
