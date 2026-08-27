import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

/**
 * Substitui o public/sitemap.xml escrito à mão, que apontava para
 * /portfolio — rota que não existe neste projeto — com um lastmod
 * congelado em outubro de 2024.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
