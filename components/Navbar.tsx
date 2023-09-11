"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center py-10 px-2 ">
      <div className="flex gap-3">
        <Link
          href={"/"}
          className={
            pathname !== "/"
              ? "text-slate-500 dark:text-slate-400"
              : "text-black dark:text-white font-medium"
          }
        >
          Home
        </Link>
        <Link
          href={"/projects"}
          className={
            pathname !== "/projects"
              ? "text-slate-500 dark:text-slate-400"
              : "text-black dark:text-white font-medium"
          }
        >
          Project
        </Link>
        <div className="text-slate-500 dark:text-slate-400 cursor-not-allowed ">
          Blog
        </div>
      </div>
      <DarkModeToggle />
    </div>
  );
}
