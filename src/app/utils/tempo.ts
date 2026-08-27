/**
 * Tempo de carreira calculado, não escrito à mão.
 *
 * O texto do "Sobre mim" dizia "mais de 2 anos de experiência" e "há
 * mais de 1 ano desenvolvendo soluções para provedores". Nenhum dos
 * dois era verdade: na data em que isso foi corrigido eram 3 anos de
 * código e 1 ano e 8 meses de atuação profissional. Número de tempo
 * escrito à mão envelhece sozinho e sempre para menos — é o mesmo
 * problema do "Copyright 2024" que ficou dois anos no rodapé.
 */

/** Primeira linha de código. */
export const INICIO_CODIGO = "2023-07-31";

/** Entrada na Sirius / Coraxy, como desenvolvedor full stack. */
export const INICIO_PROFISSIONAL = "2024-12-01";

const decompor = (desde: string, agora: Date) => {
  const inicio = new Date(`${desde}T00:00:00`);
  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  if (agora.getDate() < inicio.getDate()) meses--;
  if (meses < 0) {
    anos--;
    meses += 12;
  }
  return { anos, meses };
};

/**
 * Devolve a duração em linguagem natural, arredondando para baixo e
 * qualificando o resto: nunca afirma mais tempo do que existe.
 *
 * Roda no servidor e no cliente com o mesmo resultado — a frase só
 * muda quando vira o mês, então não há divergência de hidratação.
 */
export const tempoDeCarreira = (
  desde: string,
  pt: boolean,
  agora: Date = new Date()
) => {
  const { anos, meses } = decompor(desde, agora);

  /**
   * Arredonda para o ano mais próximo e qualifica para que lado ficou,
   * que é como a frase sai na fala: um ano e oito meses é "quase dois
   * anos", não "mais de um ano". Truncar para baixo escondia oito
   * meses de trabalho.
   */
  const total = anos + meses / 12;
  const proximo = Math.round(total);
  const unidade = pt
    ? proximo === 1
      ? "ano"
      : "anos"
    : proximo === 1
      ? "year"
      : "years";

  if (Math.abs(total - proximo) < 1 / 24) return `${proximo} ${unidade}`;
  if (total < proximo)
    return pt ? `quase ${proximo} ${unidade}` : `almost ${proximo} ${unidade}`;
  return pt ? `mais de ${proximo} ${unidade}` : `over ${proximo} ${unidade}`;
};
