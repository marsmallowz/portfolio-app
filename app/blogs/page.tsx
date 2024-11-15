import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default function BlogsPage() {
  const projectDir = "content/blogs";
  const files = fs.readdirSync(path.join(projectDir));
  const blogs = files.map((filename) => {
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
      <div className="text-xl font-bold dark:text-white">List Blog</div>
      <div className="flex flex-col gap-1 divide-y-2 divide-slate-800 dark:divide-white">
        {blogs
          .sort((a, b) => {
            if (new Date(a.meta.publishedAt) > new Date(b.meta.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((blog) => (
            <Link
              key={blog.slug}
              href={"/blogs/" + blog.slug}
              className="flex py-2 justify-between items-center dark:text-white"
            >
              <div className="flex flex-col">
                <div>{blog.meta.title}</div>
                <div>{blog.meta.publishedAt}</div>
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
