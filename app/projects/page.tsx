import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
export default function ProjectsPage() {
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
  return (
    <div className="flex flex-col gap-3">
      <div>List Project</div>
      {projects.map((project) => {
        return (
          <Link key={project.slug} href={"/projects/" + project.slug}>
            <div>{project.meta.title}</div>
            <div>{project.meta.publishedAt}</div>
          </Link>
        );
      })}
    </div>
  );
}
