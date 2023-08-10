"use client";
import Link from "next/link";
import React from "react";
import LineY from "./liney";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <span>POSTS</span>
      </Link>
      <LineY />
      <Link href={"/projects"}>
        <span>PROJECTS</span>
      </Link>
      <LineY />
      <Link href={"/"}>
        <span>STUDIO</span>
      </Link>
    </nav>
  );
};

export default Navbar;
