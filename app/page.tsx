import Image from "next/image";
import Link from "next/link";
import HomePage from "../content/homepage.mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home() {
  const markdownFile = fs.readFileSync(
    path.join("content/homepage.mdx"),
    "utf-8"
  );
  const { data: fontMatter, content } = matter(markdownFile);

  return (
    <article className="prose">
      <MDXRemote source={content} />
      <div>
        <div className="flex flex-col gap-2 p-3 border">
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
      </div>
      <div className="flex flex-col mt-6 mb-3">
        <div className="font-bold text-lg mb-1">Contact Me</div>
        <div className="font-medium">alsandymaulana@gmail.com</div>
        <Link
          href="https://wa.me/+6281904873006"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium"
        >
          +6281904873006
        </Link>
      </div>
      <div className="flex flex-col mt-3 mb-14">
        <div className="font-bold text-lg mb-1">Follow me</div>
        <Link
          href="https://linkedin.com/in/alsandy-maulana"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/marsmallowz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
      </div>
    </article>
  );
}
