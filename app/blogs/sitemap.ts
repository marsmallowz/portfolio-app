import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BASE_URL } from "@/app/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogDir = "content/blogs";
  const files = fs.readdirSync(path.join(blogDir));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return blogs.map((project) => ({
    url: `${BASE_URL}/blogs/${project.slug}`,
    lastModified: new Date(),
  }));
}
