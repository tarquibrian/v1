"use client";
import Image from "next/image";
import React, { useState } from "react";

const NextImage = ({
  src,
  label = "picture image",
  blurDataURL,
  width,
  height,
}: {
  src: string;
  label: string;
  blurDataURL: string;
  width: number;
  height: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={src}
      alt={label}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={isLoading ? "images" : "false"}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default NextImage;
