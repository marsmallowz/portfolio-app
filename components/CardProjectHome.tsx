import Link from "next/link";
import React from "react";

export default function CardProjectHome({
  children,
  title,
  type,
}: {
  children: React.ReactNode;
  title: string;
  type: "Individu" | "Team";
}) {
  return (
    <Link
      href={"/projects/project-keempat"}
      className="p-2 border hover:bg-slate-200 dark:hover:bg-yellow-800 cursor-pointer"
    >
      <div className="dark:text-white">{title}</div>
      <div className="dark:text-white">{type}</div>
      <div className="flex flex-wrap gap-2 mt-1">{children}</div>
    </Link>
  );
}
