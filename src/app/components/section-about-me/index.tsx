/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/contexts";
import {
  INICIO_CODIGO,
  INICIO_PROFISSIONAL,
  tempoDeCarreira,
} from "@/app/utils/tempo";

const SectionAboutMe = () => {
  const { language } = useLanguage();
  const pt = language === "Portuguese";
  const codando = tempoDeCarreira(INICIO_CODIGO, pt);
  const naArea = tempoDeCarreira(INICIO_PROFISSIONAL, pt);
  return (
    <section className="about-me sobre z-20" id="about-me">
      <div className="sobre__topo">
        <div className="cite">
          <p className="flex flex-col gap-10 m-0">
            <strong className="text-center text-base md:text-2xl">
              {language === "Portuguese" ? "Citação" : "Citation"}
            </strong>
            <q className=" text-base md:text-2xl max-w-lg">
              <em>
                {language === "Portuguese" ? (
                  <>
                    O segredo para um grande projeto é não se deixar levar pela
                    complexidade.
                  </>
                ) : (
                  <>
                    The secret to a great project is not to get carried away by
                    complexity.
                  </>
                )}
              </em>
            </q>
            <cite className="text-end text-base md:text-2xl">
              - Scott Berkun
            </cite>
          </p>
        </div>
        <Image
          src={"/assets/images/nv-foto.webp"}
          alt="Minha imagem"
          width={350}
          height={350}
          sizes="350px"
          quality={90}
          className="rounded-3xl border-2 border-solid img"
        />
      </div>
      <div className="contentB">
        <strong className="text-3xl">
          {language === "Portuguese" ? "Olá" : "Hello"}
        </strong>
        ,
        <article className="text-lg font-extralight pt-2">
          {pt ? (
            <>
              Sou Anderson Rodrigues, desenvolvedor Full Stack há {codando}. Há{" "}
              {naArea} construo produtos para provedores de internet — do
              levantamento do processo à arquitetura, ao deploy e ao
              acompanhamento em produção.
            </>
          ) : (
            <>
              I&apos;m Anderson Rodrigues, a Full Stack developer with {codando}{" "}
              of experience. For {naArea} I&apos;ve been building products for
              internet service providers — from mapping the process to
              architecture, deployment and keeping it running in production.
            </>
          )}
        </article>

        <article className="text-lg font-extralight pt-2">
          {pt ? (
            <>
              Meu trabalho se concentra em atendimento automatizado, cobrança e
              integração com ERPs. Arquitetei e desenvolvi uma plataforma de
              atendimento com múltiplos agentes de IA — suporte, financeiro,
              comercial, vendas e triagem — em produção em provedores de grande
              porte, com orquestração em n8n e RAG sobre banco vetorial para
              recuperar contexto. E um SaaS multi-tenant de cobrança
              automatizada por WhatsApp: régua de várias etapas, PIX dentro da
              própria conversa, filas com retentativa e conciliação periódica de
              pagamento.
            </>
          ) : (
            <>
              My work centres on automated service, billing and ERP
              integrations. I architected and built a service platform with
              multiple AI agents — support, finance, sales and triage — running
              in production at large providers, with n8n orchestration and RAG
              over a vector store for context retrieval. And a multi-tenant SaaS
              for automated billing over WhatsApp: a multi-step cadence, PIX
              inside the conversation itself, queues with retry and periodic
              payment reconciliation.
            </>
          )}
        </article>

        <article className="text-lg font-extralight pt-2">
          {pt ? (
            <>
              A stack é TypeScript dos dois lados: NestJS e Express nas APIs,
              React e Next.js na interface, PostgreSQL, MongoDB e Redis nos
              dados. Cuido também do que sustenta isso em produção — Linux,
              Docker, Traefik, CI/CD e monitoramento — e das integrações que
              ligam tudo: WhatsApp Business API, Chatwoot e os ERPs IXC Soft,
              SGP e Hubsoft.
            </>
          ) : (
            <>
              The stack is TypeScript on both sides: NestJS and Express for the
              APIs, React and Next.js for the interface, PostgreSQL, MongoDB and
              Redis for data. I also look after what keeps it running — Linux,
              Docker, Traefik, CI/CD and monitoring — and the integrations that
              tie it together: WhatsApp Business API, Chatwoot and the IXC Soft,
              SGP and Hubsoft ERPs.
            </>
          )}
        </article>
      </div>
    </section>
  );
};

export default SectionAboutMe;
