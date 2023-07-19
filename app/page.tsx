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
    <div>
      <article className="prose ">
        <MDXRemote source={content} components={{ img: ProfileImage }} />
      </article>
      <div className="flex flex-col gap-2 p-3 border mt-3 mb-5">
        <Link
          href={"/projects/project-keempat"}
          className="p-2 border hover:bg-slate-200 cursor-pointer"
        >
          <div>Skill Swap App (Tukar-Menukar)</div>
          <div>Individu</div>
          <div className="flex flex-wrap gap-2 mt-1">
            <ReactTag />
            <NextTag />
            <PrismaTag />
            <MongoDbTag />
            <TailwindTag />
          </div>
        </Link>
        <Link
          href={"/projects/project-ketiga"}
          className="p-2 border hover:bg-slate-200 cursor-pointer"
        >
          <div>Multi Warehouse E-Commerce (NiagaJaya)</div>
          <div>Team</div>
          <div className="flex flex-wrap gap-2 mt-1">
            <ReactTag />
            <ExpressTag />
            <PrismaTag />
            <MysqlTag />
            <ChakraUiTag />
          </div>
        </Link>
        <Link
          href={"/projects/project-kedua"}
          className="p-2 border hover:bg-slate-200 cursor-pointer"
        >
          <div>Library (OpenLibz)</div>
          <div>Team</div>
          <div className="flex flex-wrap gap-2 mt-1">
            <ReactTag />
            <ExpressTag />
            <SequelizeTag />
            <MysqlTag />
            <TailwindTag />
          </div>
        </Link>
        <Link
          href={"/projects/project-pertama"}
          className="p-2 border hover:bg-slate-200 cursor-pointer"
        >
          <div>Instagram Clone</div>
          <div>Individu</div>
          <div className="flex flex-wrap gap-2 mt-1">
            <ReactTag />
            <ExpressTag />
            <SequelizeTag />
            <MysqlTag />
            <TailwindTag />
          </div>
        </Link>
      </div>
    </div>
  );
}

function Tag({ name, color }: { name: string; color: string }) {
  return (
    <div
      className={`text-white text-sm border px-1 rounded-md max-w-fit ${color}`}
    >
      {name}
    </div>
  );
}

function ReactTag() {
  return <Tag name={"React.Js"} color="bg-cyan-700" />;
}

function ExpressTag() {
  return (
    <div className={`text-sm border px-1 rounded-md max-w-fit bg-yellow-300`}>
      Express.Js
    </div>
  );
}

function NextTag() {
  return <Tag name={"Next.Js"} color="bg-black" />;
}

function SequelizeTag() {
  return <Tag name={"Sequelize"} color="bg-blue-500" />;
}

function PrismaTag() {
  return <Tag name={"Prisma"} color="bg-indigo-500" />;
}

function MysqlTag() {
  return <Tag name={"Mysql"} color="bg-cyan-600" />;
}

function MongoDbTag() {
  return <Tag name={"MongoDb"} color="bg-green-700" />;
}

function TailwindTag() {
  return <Tag name={"Tailwind"} color="bg-sky-500" />;
}

function ChakraUiTag() {
  return <Tag name={"Chakra-UI"} color="bg-emerald-500" />;
}
