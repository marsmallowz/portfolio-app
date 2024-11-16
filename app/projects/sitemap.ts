import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BASE_URL } from "@/app/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectDir = "content/projects";
  const files = fs.readdirSync(path.join(projectDir));
  const projects = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(projectDir, filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));
}
