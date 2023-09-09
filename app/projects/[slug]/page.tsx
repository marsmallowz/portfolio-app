import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import CustomLink from "@/components/mdx/CustomLink";
import CustomImg from "@/components/mdx/CustomImg";
import { Metadata } from "next";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content/projects"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const project = getProject(params);
  // console.log("pro");
  // console.log(project.fontMatter.title);

  return {
    title: project.fontMatter.title,
    description: project.fontMatter.description,
    openGraph: {
      title: project.fontMatter.title,
      description: project.fontMatter.description,
    },
  };
}

function getProject({ slug }: { slug: string }) {
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
  const props = getProject(params);

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
