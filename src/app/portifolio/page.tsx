import { permanentRedirect } from "next/navigation";

/**
 * A home ficava em /portifolio e a raiz apenas redirecionava para cá.
 * Isso jogava fora a URL mais forte do site: todo visitante e todo
 * robô pagava um salto extra, e o sitemap apontava para uma terceira
 * grafia (/portfolio) que nunca existiu — ou seja, a única URL
 * entregue ao Google respondia 404.
 *
 * Agora o conteúdo mora na raiz e este caminho continua de pé, com
 * 308, para não quebrar links antigos já espalhados por aí.
 */
export default function PortifolioLegado() {
  permanentRedirect("/");
}
