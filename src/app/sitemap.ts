import type { MetadataRoute } from "next";
import { person } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/projects", "/certificates", "/experience"].map((path) => ({
    url: `${person.site}${path || "/"}`,
    lastModified: new Date("2026-09-24"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
