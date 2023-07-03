import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex gap-3 py-6">
      <Link href={"/"}>Home</Link>
      <Link href={"/projects"}>Project</Link>
      <div className="cursor-not-allowed">Blog</div>
    </div>
  );
}
