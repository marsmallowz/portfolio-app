"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex gap-3 py-10 px-2 font-medium">
      <Link
        href={"/"}
        className={pathname !== "/" ? "text-gray-500" : "text-black"}
      >
        Home
      </Link>
      <Link
        href={"/projects"}
        className={pathname !== "/projects" ? "text-gray-500" : "text-black"}
      >
        Project
      </Link>
      <div className="text-gray-500 cursor-not-allowed ">Blog</div>
    </div>
  );
}
