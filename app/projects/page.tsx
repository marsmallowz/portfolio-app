import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
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
      <div className="text-xl font-bold dark:text-white">List Project</div>
      <div className="flex flex-col gap-1 divide-y-2">
        {projects
          .sort((a, b) => {
            if (new Date(a.meta.publishedAt) > new Date(b.meta.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((project) => (
            <Link
              key={project.slug}
              href={"/projects/" + project.slug}
              className="flex py-2 justify-between items-center dark:text-white"
            >
              <div className="flex flex-col">
                <div>{project.meta.title}</div>
                <div>{project.meta.publishedAt}</div>
              </div>
              <div>
                <AiOutlineRight />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
