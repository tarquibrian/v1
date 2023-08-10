"use client";
import Link from "next/link";
import React from "react";
import LineY from "./liney";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Link
        href={"/"}
        className={pathname.split("/")[1] === "" ? "active" : ""}
      >
        <span>POSTS</span>
      </Link>
      <LineY />
      <Link
        href={"/projects"}
        className={pathname.split("/")[1] === "projects" ? "active" : ""}
      >
        <span>PROJECTS</span>
      </Link>
      <LineY />
      <Link
        href={"/"}
        className={pathname.split("/")[1] === "studio" ? "active" : ""}
      >
        <span>STUDIO</span>
      </Link>
    </nav>
  );
};

export default Navbar;
