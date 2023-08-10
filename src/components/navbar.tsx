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
        <span>ABOUT ME</span>
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
        href={"/posts"}
        className={pathname.split("/")[1] === "posts" ? "active" : ""}
      >
        <span>POSTS</span>
      </Link>
    </nav>
  );
};

export default Navbar;
