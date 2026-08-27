/**
 * Origem canônica do site. Fica num único lugar porque três arquivos
 * de metadados precisam dela (sitemap, robots e o metadataBase do
 * layout) e três cópias divergem na primeira vez que o domínio mudar.
 *
 * Em preview da Vercel a variável de ambiente assume, para que o
 * OpenGraph do preview aponte para o próprio preview e não para
 * produção.
 */
const daVercel = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : undefined;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? daVercel ?? "https://www.andersonrodrigues.shop";
