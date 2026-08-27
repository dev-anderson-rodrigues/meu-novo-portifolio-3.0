/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /**
     * AVIF antes de WebP: para o mesmo nível de qualidade percebida
     * o AVIF entrega arquivo menor, e lida melhor com os gradientes
     * do hero. Quem não suportar cai no WebP automaticamente.
     */
    formats: ["image/avif", "image/webp"],

    /**
     * O Next 16 passou a exigir que toda `quality` usada esteja
     * declarada aqui — usar uma fora da lista vira aviso e o valor
     * é ignorado.
     *
     * 90 para capturas de tela, onde texto e bordas nítidas denunciam
     * artefato de compressão. 75 segue como padrão para o resto.
     *
     * As fontes em public/ são WebP sem perda de propósito: assim a
     * única passada com perda é esta, do otimizador. Antes eram duas
     * empilhadas (fonte q82 + otimizador q75), o que serrilhava as
     * bordas de texto nos screenshots.
     */
    qualities: [75, 90],
  },
};

export default nextConfig;
