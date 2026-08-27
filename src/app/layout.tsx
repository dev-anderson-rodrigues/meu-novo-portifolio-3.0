import type { Metadata } from "next";
import "./styles/globals.css";
import { Poppins, Platypi, Alike_Angular } from "next/font/google";
import { Providers } from "../app/providers";
import { SITE_URL } from "./site";

const DESCRICAO =
  "Portfólio de Anderson Rodrigues, desenvolvedor fullstack com foco em Node.js, NestJS, React e Next.js. Oito projetos entre aplicações fullstack e APIs.";

/**
 * Sem metadataBase, qualquer caminho relativo em openGraph vira URL
 * inválida quando o Facebook, o LinkedIn ou o WhatsApp buscam o card —
 * era por isso que o link do site aparecia cru nas conversas.
 *
 * A imagem do card não é declarada aqui de propósito: o Next resolve
 * sozinho o opengraph-image.png que vive ao lado deste arquivo, e o
 * mesmo arquivo serve de fallback para o card do X/Twitter.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anderson Rodrigues | Desenvolvedor Fullstack",
    template: "%s | Anderson Rodrigues",
  },
  description: DESCRICAO,
  keywords: [
    "Anderson Rodrigues",
    "desenvolvedor fullstack",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "TypeScript",
    "portfólio",
  ],
  authors: [{ name: "Anderson Rodrigues", url: SITE_URL }],
  creator: "Anderson Rodrigues",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Anderson Rodrigues",
    title: "Anderson Rodrigues | Desenvolvedor Fullstack",
    description: DESCRICAO,
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Rodrigues | Desenvolvedor Fullstack",
    description: DESCRICAO,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
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
