import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import CustomLink from "@/components/mdx/CustomLink";
import CustomImg from "@/components/mdx/CustomImg";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content/projects"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("content/projects", slug + `.mdx`),
    "utf-8"
  );
  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  const props = getPost(params);
  return (
    <article className="prose mb-10">
      <h1>{props.fontMatter.title}</h1>
      <MDXRemote
        source={props.content}
        components={{ a: CustomLink, img: CustomImg }}
      />
    </article>
  );
}
