import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import ProfileImage from "@/components/mdx/ProfileImage";

export default function Home() {
  const markdownFile = fs.readFileSync(
    path.join("content/homepage.mdx"),
    "utf-8"
  );
  const { data: fontMatter, content } = matter(markdownFile);

  return (
    <article className="prose ">
      <MDXRemote source={content} components={{ img: ProfileImage }} />
      <div className="flex flex-col gap-2 p-3 border mt-3 mb-5">
        <Link
          href={"/projects/project-ketiga"}
          className="p-2 border hover:bg-slate-200 cursor-pointer"
        >
          <div>Multi Warehouse E-Commerce (NiagaJaya)</div>
          <div>Team</div>
          <div className="flex flex-wrap gap-2 mt-1">
            <div className="text-sm border px-1 rounded-md max-w-fit bg-blue-400">
              React.Js
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-yellow-200">
              Express.Js
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-sky-300">
              Prisma
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-cyan-200">
              Mysql
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-emerald-200">
              Chakra-UI
            </div>
          </div>
        </Link>
        <Link
          href={"/projects/project-kedua"}
          className="p-2 border hover:bg-slate-200 cursor-pointer"
        >
          <div>Library (OpenLibz)</div>
          <div>Team</div>
          <div className="flex flex-wrap gap-2 mt-1">
            <div className="text-sm border px-1 rounded-md max-w-fit bg-blue-400">
              React.Js
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-yellow-200">
              Express.Js
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-sky-500">
              Sequelize
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-cyan-200">
              Mysql
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-blue-200">
              Tailwind
            </div>
          </div>
        </Link>
        <Link
          href={"/projects/project-pertama"}
          className="p-2 border hover:bg-slate-200 cursor-pointer"
        >
          <div>Instagram Clone</div>
          <div>Individu</div>
          <div className="flex flex-wrap gap-2 mt-1">
            <div className="text-sm border px-1 rounded-md max-w-fit bg-blue-400">
              React.Js
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-yellow-200">
              Express.Js
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-sky-500">
              Sequelize
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-cyan-200">
              Mysql
            </div>
            <div className="text-sm border px-1 rounded-md max-w-fit bg-blue-200">
              Tailwind
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
}
