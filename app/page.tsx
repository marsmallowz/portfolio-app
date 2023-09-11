import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import ProfileImage from "@/components/mdx/ProfileImage";
import CardProjectHome from "@/components/CardProjectHome";

export default function Home() {
  const markdownFile = fs.readFileSync(
    path.join("content/homepage.mdx"),
    "utf-8"
  );
  const { data: fontMatter, content } = matter(markdownFile);
  return (
    <div>
      <article className="prose dark:prose-invert">
        <MDXRemote source={content} components={{ img: ProfileImage }} />
      </article>
      <div className="flex flex-col gap-2 p-3 border border-black mt-3 mb-5 bg-white dark:border-slate-200 dark:bg-slate-600 ">
        <CardProjectHome title="Skill Swap App (Tukar-Menukar)" type="Individu">
          <ReactTag />
          <NextTag />
          <PrismaTag />
          <MongoDbTag />
          <TailwindTag />
        </CardProjectHome>
        <CardProjectHome
          title="Multi Warehouse E-Commerce (NiagaJaya)"
          type="Team"
        >
          <ReactTag />
          <ExpressTag />
          <PrismaTag />
          <MysqlTag />
          <ChakraUiTag />
        </CardProjectHome>
        <CardProjectHome title="Library (OpenLibz)" type="Team">
          <ReactTag />
          <ExpressTag />
          <SequelizeTag />
          <MysqlTag />
          <TailwindTag />
        </CardProjectHome>
        <CardProjectHome title="Instagram Clone" type="Individu">
          <ReactTag />
          <ExpressTag />
          <SequelizeTag />
          <MysqlTag />
          <TailwindTag />
        </CardProjectHome>
      </div>
    </div>
  );
}

function Tag({ name, color }: { name: string; color: string }) {
  return (
    <div className={`text-white text-sm px-1 rounded-md max-w-fit ${color}`}>
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
