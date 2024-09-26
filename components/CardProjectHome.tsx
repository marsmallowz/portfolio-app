import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardProjectHome({
  children,
  title,
  type,
  url,
  showTitle,
  src_image,
  alt_image,
}: {
  children: React.ReactNode;
  title: string;
  type: "Individu" | "Team";
  url: string;
  showTitle: boolean;
  src_image?: string;
  alt_image?: string;
}) {
  return (
    <Link
      href={url}
      className="p-2 border border-black dark:border-slate-200 hover:bg-slate-100 dark:hover:bg-yellow-800 cursor-pointer"
    >
      {src_image != undefined && alt_image != undefined ? (
        <Image
          src={src_image}
          alt={alt_image}
          width={400}
          height={500}
          style={{ cursor: "pointer" }}
          className="p-2 mx-auto sm:transition-transform sm:duration-300 sm:ease-in-out sm:transform-gpu sm:hover:scale-110"
        />
      ) : null}
      {showTitle ? <div className="dark:text-white">{title}</div> : null}
      <div className="dark:text-white">{type}</div>
      <div className="flex flex-wrap gap-2 mt-1">{children}</div>
    </Link>
  );
}
