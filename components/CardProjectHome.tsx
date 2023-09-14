import Link from "next/link";
import React from "react";

export default function CardProjectHome({
  children,
  title,
  type,
  url,
}: {
  children: React.ReactNode;
  title: string;
  type: "Individu" | "Team";
  url: string;
}) {
  return (
    <Link
      href={url}
      className="p-2 border border-black dark:border-slate-200 hover:bg-slate-100 dark:hover:bg-yellow-800 cursor-pointer"
    >
      <div className="dark:text-white">{title}</div>
      <div className="dark:text-white">{type}</div>
      <div className="flex flex-wrap gap-2 mt-1">{children}</div>
    </Link>
  );
}
