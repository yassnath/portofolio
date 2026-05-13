import type { MetadataRoute } from "next";

const siteUrl = "https://andreas-nath.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
