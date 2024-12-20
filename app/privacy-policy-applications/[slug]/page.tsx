import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import CustomLink from "@/components/mdx/CustomLink";
import CustomImg from "@/components/mdx/CustomImg";
import { Metadata } from "next";

export async function generateStaticParams() {
  const files = fs.readdirSync(
    path.join("content/privacy-policy-applications")
  );
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
  return {
    title: project.fontMatter.title,
    openGraph: {
      title: project.fontMatter.title,
      description: project.fontMatter.summary,
      images:
        project.fontMatter.imageShowcase !== undefined
          ? [`/image-showcase/${project.fontMatter.imageShowcase}`]
          : [""],
    },
  };
}

function getProject({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("content/privacy-policy-applications", slug + `.mdx`),
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
    <article className="prose mb-10 dark:prose-invert">
      <h1>{props.fontMatter.title}</h1>
      <MDXRemote
        source={props.content}
        components={{ a: CustomLink, img: CustomImg }}
      />
    </article>
  );
}
