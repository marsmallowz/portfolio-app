import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import ProfileImage from "@/components/mdx/ProfileImage";
import CardProjectHome from "@/components/CardProjectHome";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  alternates: {
    canonical: "https://alsandymaulana.com",
  },
};

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
        <CardProjectHome
          title="Universe Grid - Game of Life"
          type="Individu"
          url="/projects/universe-grid"
          src_image="/image-showcase/UniverseGrid.png"
          alt_image="Image showcase Universe Grid"
          showTitle={false}
        >
          <ClosedTestTag />
          <GodotTag />
          <PlaystoreTag />
          <MobileTag />
          <AdmobTag />
        </CardProjectHome>
        <CardProjectHome
          title="Langkah ASN"
          type="Individu"
          url="/projects/langkah-asn"
          src_image="/image-showcase/LangkahASN.png"
          alt_image="Image showcase Langkah ASN"
          showTitle={false}
        >
          <ReleaseTag />
          <GodotTag />
          <PlaystoreTag />
          <MobileTag />
          <AdmobTag />
        </CardProjectHome>
        <CardProjectHome
          title="Simple Game"
          type="Individu"
          url="/projects/simple-game"
          src_image="/image-showcase/SimpleGameShowcase.png"
          alt_image="Image showcase simplegame"
          showTitle={false}
        >
          <ReactNativeTag />
          <MongoDbTag />
          <MongoseTag />
          <NestTag />
        </CardProjectHome>
        <CardProjectHome
          title="Skill Swap App (Tukar-Menukar)"
          type="Individu"
          url="/projects/project-keempat"
          src_image="/image-showcase/Tukar-MenukarShowcase.png"
          alt_image="Image showcase tukar-menukar"
          showTitle={false}
        >
          <ReactTag />
          <NextTag />
          <PrismaTag />
          <MongoDbTag />
          <TailwindTag />
        </CardProjectHome>
        <CardProjectHome
          title="Multi Warehouse E-Commerce (NiagaJaya)"
          type="Team"
          url="/projects/project-ketiga"
          src_image="/image-showcase/NiagajayaShowcase.png"
          alt_image="Image showcase niagajaya"
          showTitle={false}
        >
          <ReactTag />
          <ExpressTag />
          <PrismaTag />
          <MysqlTag />
          <ChakraUiTag />
        </CardProjectHome>
        <CardProjectHome
          title="Library (OpenLibz)"
          type="Team"
          url="/projects/project-kedua"
          showTitle={true}
        >
          <ReactTag />
          <ExpressTag />
          <SequelizeTag />
          <MysqlTag />
          <TailwindTag />
        </CardProjectHome>
        <CardProjectHome
          title="Instagram Clone"
          type="Individu"
          url="/projects/project-pertama"
          showTitle={true}
        >
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

function ReactNativeTag() {
  return <Tag name={"React Native"} color="bg-cyan-600" />;
}

function ExpressTag() {
  return (
    <div className={`text-sm border px-1 rounded-md max-w-fit bg-yellow-300`}>
      Express.Js
    </div>
  );
}

function NestTag() {
  return (
    <div className={`text-sm border px-1 rounded-md max-w-fit bg-red-500`}>
      Nest.Js
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

function MongoseTag() {
  return <Tag name={"Mongose"} color="bg-green-500" />;
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

function GodotTag() {
  return <Tag name={"Godot Engine"} color="bg-[#478CBF]" />;
}

function PlaystoreTag() {
  return <Tag name={"Playstore"} color="bg-[#F38333]" />;
}

function MobileTag() {
  return <Tag name={"Mobile"} color="bg-[#33A04A]" />;
}

function AdmobTag() {
  return <Tag name={"Admob"} color="bg-[#EA4335]" />;
}

function ReleaseTag() {
  return <Tag name={"Release"} color="bg-pink-700" />;
}

function ClosedTestTag() {
  return <Tag name={"Closed Test"} color="bg-indigo-700" />;
}
